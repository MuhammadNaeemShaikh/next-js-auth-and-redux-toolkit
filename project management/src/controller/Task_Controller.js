const { ProjectModel, TaskModel } = require('../Model/index');
const { STATUS_CODE } = require('../utils/status_code')

//<-------------------------- find team lead or member task -------------------->

const findTask = async (req, res, next) => {
    try {
        const { _id } = req.user;

        const findProjectsInTeamLead = await ProjectModel.find({ teamLead: _id });

        const findProjectsInTeamMembers = await ProjectModel.find({ teamMembers: _id });

        let isTaskFound = [];

        if (findProjectsInTeamLead.length > 0) {
            const tasksPromises = findProjectsInTeamLead.map(project => TaskModel.find({ projectId: project._id }));
            isTaskFound = await Promise.all(tasksPromises);
        } else if (findProjectsInTeamMembers.length > 0) {
            const tasksPromises = findProjectsInTeamMembers.map(project => TaskModel.find({ projectId: project._id }));
            isTaskFound = await Promise.all(tasksPromises);
        }


        return res.status(STATUS_CODE.OK).json({
            success: 1,
            data: isTaskFound.flat()
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    findTask
}
