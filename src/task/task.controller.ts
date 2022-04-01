import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(readonly taskService: TaskService) {}

  @Post()
  create(@Body() taskDto: TaskDto) {
    // return this.taskService.create(taskDto);

    throw new BadRequestException('test error');
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Error en la peticion'), 2000);
    });
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDto: TaskDto) {
    return this.taskService.update(id, taskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
