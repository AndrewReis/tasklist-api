// helpers
const AppError = require('../../helpers/app-error');

class CreateTask {
  constructor(userRepository, taskListRepository) {
    this.userRepository     = userRepository;
    this.taskListRepository = taskListRepository;
  }

  async execute(userId, title) {
    const user = await this.userRepository.getById(userId);

    if (user) {
      const task = {
        title        : title,
        is_completed : false,
        user_id      : user.id,
        created_at   : new Date(),
        updated_at   : new Date()
      }

      await this.taskListRepository.create(task);
      return task;
    }

    throw new AppError('User not found', 404);
  }
} 

module.exports = CreateTask;