import { Pipe, PipeTransform } from '@angular/core';
import { Itheme } from '../../../core/modal/themes.modal';
import { IRecentTopics } from '../../model/pipes.model';
import { TransformArr } from '../../util/transformArray.utile';

@Pipe({
  name: 'recentTopics'
})

export class RecentTopicsPipe implements PipeTransform {
  transform(themes: Itheme[]): IRecentTopics[] {
    return TransformArr.sortThemesByDate(themes).sort((a, b) => +b.date - +a.date);
  }
}
