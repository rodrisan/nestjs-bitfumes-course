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

  create(req: Request) {
    return req.body;
  }

  update(req: Request, param: { id: number }) {
    return { body: req.body, param };
  }

  show(param: { id: number }) {
    return param;
  }

  delete(param: { id: number }) {
    return param;
  }
}
