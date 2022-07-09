import { Pipe, PipeTransform } from '@angular/core';
import { Itheme } from '../../../core/modal/themes.modal';

type RecentTopics = {
  name: string,
  subTheme: string,
  theme: string,
  url: string,
  date: Date,
  sourse: string,
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
            const sourse = elem.sourse ?? '';
            const recentTopic: RecentTopics = {
              name: elem.name,
              theme: theme.name,
              subTheme: subTheme.name,
              date: elem.date,
              url: elem.url,
              sourse: sourse,
            }
            recentTopics.push(recentTopic);
            console.log(elem);
          }
        });
      })
    });
    return recentTopics.sort((a, b) => +b.date - +a.date );
  }
}
