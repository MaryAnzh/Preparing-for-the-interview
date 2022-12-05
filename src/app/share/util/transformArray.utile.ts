import { ITheme } from "src/app/core/modal/themes.modal";
import { IRecentTopics } from "../model/pipes.model";

export class TransformArr {

  static sortThemesByDate(themes: ITheme[]): IRecentTopics[] {
    const recentTopics: IRecentTopics[] = [];

    themes.forEach((theme) => {
      theme.subTheme.forEach((subTheme) => {
        subTheme.description.forEach((elem) => {
          if (elem.date !== null) {
            const source = elem.source ?? '';
            const recentTopic: IRecentTopics = {
              name: elem.name,
              theme: theme.name,
              subTheme: subTheme.name,
              date: elem.date,
              url: elem.url,
              source: source,
            }
            recentTopics.push(recentTopic);
          }
        });
      })
    });
    return recentTopics;
  }
}
