import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from '../models/user.schema';

const getCurrentUserbyContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserbyContext(context),
);
