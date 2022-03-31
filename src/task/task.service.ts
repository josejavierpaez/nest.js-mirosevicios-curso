import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid';
import { Itask } from './task.interface';
@Injectable()
export class TaskService {
  tasks: Itask[] = [];
  create(taskDto: TaskDto) {
    const task = {
      id: uuidv4(),
      ...taskDto,
    };

    this.tasks.push(task);
    return task;
  }

  findAll(): Itask[] {
    return this.tasks;
  }

  findOne(id: string): Itask {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: string, taskDto: TaskDto): Itask {
    const newTask = {
      id,
      ...taskDto,
    };

    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));

    return newTask;
  }

  delete(id: string): string {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return 'task deleted';
  }
}
