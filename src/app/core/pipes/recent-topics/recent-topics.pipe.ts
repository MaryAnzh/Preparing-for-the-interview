import { Pipe, PipeTransform } from '@angular/core';
import { Itheme } from '../../modal/themes.modal';

type RecentTopics = {
  name: string,
  subTheme: string,
  theme: string,
  url: string,
  date: Date,
}

@Pipe({
  name: 'recentTopics'
})

export class RecentTopicsPipe implements PipeTransform {

  transform(themes: Itheme[]): RecentTopics[] {
    const recentTopics: RecentTopics[] = [];

    themes.forEach((theme) => {
      theme.subTheme.forEach((subTheme) => {
        subTheme.description.forEach((elem) => {
          if (elem.date !== null) {
            const recentTopic: RecentTopics = {
              name: elem.name,
              theme: theme.name,
              subTheme: subTheme.name,
              date: elem.date,
              url: elem.url,
            }
            recentTopics.push(recentTopic);
          }
        });
      })
    });
    return recentTopics.sort((a, b) => +b.date - +a.date );
  }
}
