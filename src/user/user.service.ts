import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  get() {
    return {
      name: 'Rod',
      email: 'j@r.s',
    };
  }

  create(body: any) {
    return body;
  }

  update(body: any, param: { id: number }) {
    return { body, param };
  }

  show(param: { id: number }) {
    return param;
  }

  delete(param: { id: number }) {
    return param;
  }
}
