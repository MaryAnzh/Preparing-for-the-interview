import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recentTopics'
})

export class RecentTopicsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
