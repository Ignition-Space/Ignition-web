import { ApiProperty } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/common/swagger';

export class SignInDto {
  @ApiProperty({
    description: '用户名',
  })
  username: string;

  @ApiProperty({
    description: '密码',
  })
  password: string;
}

class SignInResDO {
  @ApiProperty({
    description: 'token',
  })
  accessToken: string;
}

export class SignInResDto extends CommonResponseDto {
  @ApiProperty({
    description: 'token',
    type: SignInResDO,
  })
  data: SignInResDO;
}
