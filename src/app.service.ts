import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHome(): {} {
    return {title: 'Home Page'};
    }
  getAboutUs(): {} {
    return {title: 'About Us Page'}; }
}
