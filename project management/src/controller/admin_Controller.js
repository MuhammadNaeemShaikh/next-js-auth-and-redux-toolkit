
const { UserModel, ProjectModel, TaskModel } = require('../Model/index');
const { STATUS_CODE } = require('../utils/status_code')
const { roleEnum } = require('../utils/enum');


//<---------------------------change role of users---------------------------->


const changeRoleClt = async (req, res, next) => {
    try {

        const { role, _id } = req.body;

        // Check if the new role is a valid enum value
        if (!role || !roleEnum.includes(role)) {
            return res.status(STATUS_CODE.BAD_REQUEST).json({
                success: 0,
                message: "Invalid role specified",
            });
        }

        //update role

        const updateRole = await UserModel.findByIdAndUpdate(
            { _id },
            { role }
        )

        return res.status(STATUS_CODE.OK).json({
            success: 1,
            message: "Role Updated"
        })


    } catch (error) {
        next(error)
    }
}

//<---------------------------change role of users End------------------------>



//<---------------------------get all user with respective role--------------->

const getAllUsers = async (req, res, next) => {
    try {

        const teamLead = [];
        const member = [];

        const getUsers = await UserModel.find().select('role userName');

        for (let i = 0; i < getUsers.length; i++) {
            if (getUsers[i].role === 'team-lead') {
                teamLead.push({
                    name: getUsers[i].userName,
                    _id: getUsers[i]._id
                });
            } else if (getUsers[i].role === 'member') {
                member.push({
                    name: getUsers[i].userName,
                    _id: getUsers[i]._id
                });
            }
        };


        return res.status(STATUS_CODE.OK).json({
            success: 1,
            data: {
                teamLead,
                member
            }
        });

    } catch (error) {
        next(error)
    }
}

//<---------------------------get all user with respective role End----------->


//<--------------------------- Create Project -------------------------------->

const createProjectClt = async (req, res, next) => {
    try {

        const { projectName, teamLeadId, teamMembers } = req.body;

        //check project name is already exist in db

        const isExist = await ProjectModel.findOne({ projectName });

        if (isExist) {
            return res.status(STATUS_CODE.USER_ALREADY_EXISTS).json({
                success: 0,
                message: "Project Name Already specified",
            });
        }


        const createNewProj = await ProjectModel.create({
            projectName,
            teamLead: teamLeadId,
            teamMembers
        });

        return res.status(STATUS_CODE.OK).json({
            success: 1,
            message: "Project Successfully Created"
        });

    } catch (error) {
        next(error)
    }
}

//<--------------------------- Create Project End ---------------------------->


//<--------------------------- Get Project Teams and members ----------------->

const getProjectTeamClt = async (req, res, next) => {
    try {

        //get _id from params 
        const { _id } = req.params;

        const getProject = await ProjectModel.findOne({ _id }).populate("teamLead", "email gender age userName").populate("teamMembers", "email gender age userName")

        return res.status(STATUS_CODE.OK).json({
            success: 1,
            data: getProject
        })

    } catch (error) {
        next(error)
    }
}

//<--------------------------- Get Project Teams and members ----------------->


//<--------------------------- assigning task to team ------------------------->

const assignTask = async (req, res, next) => {
    try {

        const { projectId, taskName, description, duration, startDate, startTime, endDate, endTime, documents, image, comments } = req.body;

        const createTask = await TaskModel.create({
            projectId,
            taskName,
            description,
            duration,
            startDate,
            startTime,
            endDate,
            endTime,
            documents,
            image,
            comments
        })

        return res.status(STATUS_CODE.OK).json({
            success: 1,
            message: "Task Created"
        })


    } catch (error) {
        next(error)
    }
}

//<--------------------------- assigning task to team End --------------------->


module.exports = {
    changeRoleClt,
    getAllUsers,
    createProjectClt,
    getProjectTeamClt,
    assignTask
}