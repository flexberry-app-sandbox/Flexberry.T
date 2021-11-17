import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.водоканал.caption'),
          title: i18n.t('forms.application.sitemap.водоканал.title'),
          children: [{
            link: 'i-i-s-t-вид-работы-l',
            caption: i18n.t('forms.application.sitemap.водоканал.i-i-s-t-вид-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.водоканал.i-i-s-t-вид-работы-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-t-работа-l',
            caption: i18n.t('forms.application.sitemap.водоканал.i-i-s-t-работа-l.caption'),
            title: i18n.t('forms.application.sitemap.водоканал.i-i-s-t-работа-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-t-задание-l',
            caption: i18n.t('forms.application.sitemap.водоканал.i-i-s-t-задание-l.caption'),
            title: i18n.t('forms.application.sitemap.водоканал.i-i-s-t-задание-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-t-вид-работы-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-t-вид-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-t-вид-работы-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-t-заявка-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-t-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-t-заявка-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})