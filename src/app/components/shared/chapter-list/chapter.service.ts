import { Chapter } from './chapter.model';

export class ChapterService {

  constructor() {}

  private content = '\n' +
    '\n' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend elit magna, et molestie lacus elementum ut. Sed vestibulum diam quis lorem mollis, sit amet lobortis nulla efficitur. Phasellus fermentum sem dui. Quisque augue nisl, sollicitudin sit amet diam et, dignissim scelerisque augue. Nullam a sagittis risus. Donec leo sapien, imperdiet nec dolor quis, maximus convallis ligula. Nulla sit amet facilisis dui. Integer pellentesque sodales tempus.\n' +
    '\n' +
    'Sed varius nulla et diam imperdiet, vestibulum convallis libero pulvinar. Ut cursus, massa nec consectetur auctor, erat est porta augue, vitae laoreet mauris purus eu neque. In rhoncus dictum orci ac euismod. Vivamus at odio magna. Maecenas venenatis diam quis dapibus ultrices. Ut et felis sit amet risus tristique lobortis at sed velit. Aenean nec venenatis est. Nullam et elit vel risus pellentesque vestibulum in tempor mi. Ut pretium tempor hendrerit. Aenean sollicitudin efficitur felis eu blandit. Donec elementum, erat vitae blandit viverra, nulla felis porttitor velit, vel eleifend dolor est in lorem. Curabitur bibendum finibus eros. Nam faucibus sapien at diam vehicula ultricies. Vestibulum eget odio tincidunt, venenatis massa sit amet, dictum magna. Phasellus sed dictum ante. Praesent sagittis blandit tempus.\n' +
    '\n' +
    'Ut sodales accumsan tristique. Vivamus congue volutpat tellus, quis rutrum mi iaculis ultrices. Donec eu ante sed sem efficitur auctor. Quisque blandit luctus odio. Nulla facilisi. Morbi mollis bibendum nibh, quis tristique lacus mollis nec. Sed ac tincidunt leo. Sed consequat tortor viverra tellus venenatis maximus. Sed fermentum mattis nisi id iaculis. Maecenas porttitor ante at vulputate consequat. Praesent faucibus, ex in congue maximus, nunc sapien eleifend urna, a auctor diam ante in sem.\n' +
    '\n' +
    'Aenean imperdiet est velit, id feugiat lorem tempor in. Nam turpis quam, auctor nec nulla ac, fringilla congue augue. Cras eros orci, vestibulum ac dui in, volutpat pretium sapien. In semper sollicitudin purus eget eleifend. Vestibulum velit libero, malesuada non venenatis nec, ultricies bibendum ipsum. Pellentesque quis metus non sapien commodo tincidunt non id leo. Maecenas placerat neque id fringilla fringilla. Fusce tincidunt mollis justo, vitae suscipit arcu porta lobortis. Vivamus suscipit eu erat ac consectetur. Vivamus magna libero, sollicitudin vel convallis sed, condimentum nec augue. Etiam fringilla dignissim elementum.\n' +
    '\n' +
    'Donec in ipsum et tellus dignissim luctus. Mauris malesuada nec enim at pretium. Quisque dapibus arcu venenatis, dignissim nibh eu, tincidunt dui. Sed eu sapien a purus mollis porta vitae vitae ex. Proin vehicula rutrum nulla, et maximus justo maximus a. Suspendisse vitae dolor leo. Pellentesque tempus scelerisque lorem et rhoncus. Nullam in euismod metus, quis volutpat lectus. Vestibulum vitae laoreet massa. Donec vestibulum risus facilisis tortor lacinia, sed tristique arcu rutrum. Morbi tincidunt dui tellus, quis ultricies ipsum interdum non. Donec dolor urna, mattis quis euismod sit amet, sagittis nec ante. In hac habitasse platea dictumst. Nulla enim orci, finibus congue consequat sit amet, rhoncus vel magna.\n' +
    '\n' +
    'Nullam et arcu vitae enim dapibus pharetra in a diam. Nam vitae fermentum nulla, eu tincidunt elit. Aliquam erat volutpat. Aliquam vestibulum ornare lacus, eget porttitor purus sollicitudin ac. Nunc auctor, lacus consectetur rutrum sollicitudin, magna velit eleifend eros, auctor tempor est mi eu velit. Nunc imperdiet mauris urna. Fusce vulputate felis at mi semper tempus.\n' +
    '\n' +
    'Nullam venenatis gravida neque vitae sollicitudin. Cras in erat eget nunc ornare suscipit in ac enim. Sed magna risus, molestie vel lobortis in, mattis et turpis. Nulla lobortis nulla vel elementum ullamcorper. Maecenas facilisis ligula erat, eget blandit tellus hendrerit at. In sed velit tellus. Donec efficitur ut tortor a commodo. Fusce vel faucibus dui. Proin gravida ex a tempor tincidunt.\n' +
    '\n' +
    'Etiam pulvinar ornare mauris, eget convallis leo tempus eget. Phasellus cursus porttitor felis eu aliquam. Nullam et ornare ligula. Morbi nec lacus ultrices erat efficitur laoreet. Nullam nisi dolor, facilisis vitae iaculis id, gravida eu nisi. Vestibulum quam elit, dictum vel ex non, pretium congue sapien. Vivamus nibh nulla, cursus eget nibh eu, placerat convallis leo. Integer vitae imperdiet elit, at egestas ante. Praesent nec dui viverra, ultricies enim vitae, ultricies nisl. Suspendisse odio mi, sollicitudin ut luctus pellentesque, porta in sem. Duis vitae sollicitudin mi, quis sollicitudin lectus. Sed interdum efficitur luctus. Nunc non ante magna. Praesent luctus nisi vitae mi semper scelerisque sed vel neque. Pellentesque dictum consectetur rutrum.\n' +
    '\n' +
    'Suspendisse sagittis urna erat, vel dignissim dui gravida vel. Ut vel enim orci. Donec quis laoreet nunc. Integer feugiat volutpat feugiat. Ut laoreet vel lectus a varius. Maecenas orci odio, pellentesque nec felis id, egestas pulvinar ante. Vestibulum varius tempus commodo. Cras ornare, risus non aliquam tristique, eros metus posuere erat, sit amet viverra tortor risus finibus eros.\n' +
    '\n' +
    'Etiam sed tellus ac erat aliquam gravida. Quisque a augue nec sapien bibendum blandit. Aliquam luctus aliquet orci, sit amet tristique dolor elementum in. Sed commodo orci in faucibus sagittis. Quisque in ipsum aliquam, porta nisl ac, sagittis metus. Quisque sodales urna eu gravida euismod. Vestibulum augue eros, dictum sed leo sed, fringilla mollis felis. Nunc accumsan libero eget urna vestibulum, et porta dolor scelerisque.\n' +
    '\n' +
    'Nunc mollis arcu in magna auctor, rutrum tempus erat pharetra. Aenean faucibus nibh blandit, porta mauris eget, rutrum mi. In tempus quis nisl tincidunt faucibus. Proin ac molestie lectus. Vestibulum molestie at sapien eu mollis. Maecenas commodo mauris lobortis, mollis odio quis, mattis lacus. In tempor efficitur neque, vel ultrices orci consequat lacinia. In dignissim, nisl et convallis lobortis, velit ligula suscipit eros, ut ultrices nunc dui et leo. Nulla sed augue eleifend, facilisis sapien ac, lobortis lectus. Cras eget mi vel ex faucibus facilisis. Donec semper congue diam, in tempor nisi dapibus eget. Ut libero lorem, auctor sit amet dapibus ac, imperdiet sit amet eros. Proin elementum purus eget risus tristique, quis finibus libero varius. Donec quis dolor volutpat, scelerisque erat non, imperdiet urna. Mauris feugiat nulla purus, nec lacinia justo finibus a.\n' +
    '\n' +
    'Nam imperdiet vitae justo et gravida. Suspendisse scelerisque pellentesque ex, a ultrices justo ornare id. Quisque blandit, ligula in finibus feugiat, justo massa fringilla diam, vitae mattis sem ante at orci. Praesent placerat lectus et gravida rutrum. Praesent eleifend diam non porttitor elementum. Cras tempus ullamcorper ex. Praesent aliquam facilisis sapien, in malesuada velit scelerisque eget. Nullam eros nibh, maximus et ultrices in, placerat eget risus. Pellentesque dui ante, commodo ut venenatis sed, tempus eget odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus, sem ut consequat tincidunt, urna magna semper est, eget tempus lacus leo at orci. Fusce consequat diam ut tincidunt posuere.\n' +
    '\n' +
    'Donec maximus, velit in facilisis tempor, augue tortor placerat risus, eu rhoncus lectus nibh quis lorem. Aliquam ullamcorper laoreet sem imperdiet ultrices. Ut pellentesque aliquet felis vel gravida. Mauris lorem libero, viverra id ornare vel, auctor eu est. Aenean efficitur placerat lacus ut accumsan. Nullam vitae dictum mauris, lacinia aliquam lacus. Nulla at lectus suscipit nisl sagittis rutrum. Aliquam aliquet vitae odio et lacinia. Morbi facilisis nunc pulvinar tellus rhoncus, a rutrum dui consectetur.\n' +
    '\n' +
    'Aenean dictum nunc ut odio molestie pharetra. Phasellus vitae euismod eros. Proin sollicitudin nec ligula tempus eleifend. Nulla facilisi. Nunc aliquet varius sapien, nec facilisis lectus lobortis nec. In et dolor ac arcu volutpat mattis. Ut a eros leo. In in quam ornare, mollis metus id, rutrum turpis. Etiam porta et urna mollis sagittis. Morbi mauris dui, rutrum quis augue id, tincidunt pulvinar enim. Nullam eget sem vel quam tempor consequat et fringilla magna. Aenean nisl lorem, ullamcorper sit amet iaculis et, feugiat nec nunc. In tempus suscipit commodo. In ornare felis odio.\n' +
    '\n' +
    'Vivamus non consectetur magna. Nulla auctor, dui non pharetra semper, arcu nulla pulvinar nisl, sed lobortis nisi nisi ac dui. Praesent tincidunt imperdiet arcu, eget blandit nisl pellentesque a. Quisque eget purus vel elit bibendum tempus dignissim in erat. Ut ornare vitae tellus sit amet pharetra. Fusce nec nunc tincidunt, molestie nisi quis, tincidunt lorem. Pellentesque tempus pulvinar nulla ac auctor. Sed vitae efficitur odio. Nullam scelerisque sem id nulla vestibulum varius. Phasellus placerat cursus tincidunt. Nullam imperdiet eu odio sit amet dignissim. Nulla fringilla cursus odio non molestie. Maecenas fringilla porta justo, non volutpat tellus porta sit amet. ';

  private data: Chapter[] = [
    new Chapter(1, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(2, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(3, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(4, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(5, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(6, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(7, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(8, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(9, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(10, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content),
    new Chapter(11, 1, 'Welcome to Desiclassifields Free Classifields Free Ads', this.content)
  ];

  getData() {
    return this.data;
  }

  getChaptersFromCourseById(id: number) {
    const chapters: Chapter[] = [];
    for (const chapter of this.data) {
      if (chapter.getCourseId() === id) {
        chapters.push(chapter);
      }
    }
    return chapters;
  }

  getSize(id = 0) {
    return this.data.length;
  }

  getSizeById(id: number) {
    return this.getChaptersFromCourseById(id).length;
  }

  getChapterCourseById(id: number) {
    for (const chapter of this.data) {
      if (chapter.getId() === id) {
        return chapter.getCourseId();
      }
    }
  }

  getChapterTitleById(id: number) {
    for (let chapter of this.data) {
      if (chapter.getId() === id) {
        return chapter.getTitle();
      }
    }
  }

  noOfChapterInCourse(course_id: number, chapter_id: number) {

    const chapters: Chapter[] = this.getChaptersFromCourseById(course_id);

    for (let i = 0; i < chapters.length; i++) {
      if(chapters[i].getId() === chapter_id) {
        return i + 1;
      }
    }

  }

  getPrevNext(course_id: number, chapter_id: number, type: number) {

    const chapters: Chapter[] = this.getChaptersFromCourseById(course_id);

    let len = chapters.length;

    let pos = this.noOfChapterInCourse(course_id, chapter_id) - 1;

    if ( type === 1 ) {
      if (pos === 0)
        return -1;
      return chapters[pos - 1].getId();
    } else {
      if (pos === len - 1)
        return -1;
      return chapters[pos + 1].getId();
    }

  }

  getChapterContentById(id) {
    for (let chapter of this.data) {
      if (chapter.getId() === id) {
        return chapter.getContent();
      }
    }
  }

  deleteChapter(id) {
    let index = 0;
    for (let chapter of this.data) {
      if (chapter.getId() === id) {
        this.data.splice(index, 1);
        return;
      }
      index++;
    }
  }

}
