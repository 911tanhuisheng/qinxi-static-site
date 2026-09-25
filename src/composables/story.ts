export const storyPages = [
  { kicker: 'MID-AUTUMN · 2026', title: '月色寄相思', lines: ['山海搁万里', '中秋愿你无忧'], note: '轻触屏幕，收下这一轮月色' },
  { kicker: '01 / MOONLIGHT', title: '今晚的月亮', lines: ['像一封没有地址的信', '却总能抵达心里'], note: '月光不问归期' },
  { kicker: '02 / DISTANCE', title: '它越过山海', lines: ['落在每一个', '想念的人肩上'], note: '山河再远，共沐清辉' },
  { kicker: '03 / WISH', title: '愿你所念', lines: ['亦念你', '愿你所盼，皆有回音'], note: '愿岁岁无忧，常伴温柔' },
  { kicker: 'MOONLIGHT LETTER', title: '中秋快乐', lines: ['愿月圆人安', '愿美好如期而至'], note: '轻触，再看一次月亮' }
] as const
export const storyIntervalMs = 3000
export function nextStoryPage(current: number) { return current >= storyPages.length - 1 ? -1 : current + 1 }
