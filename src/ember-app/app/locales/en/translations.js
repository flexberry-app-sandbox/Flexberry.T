import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTВидРаботыLForm from './forms/i-i-s-t-вид-работы-l';
import IISTЗаданиеLForm from './forms/i-i-s-t-задание-l';
import IISTЗаявкаLForm from './forms/i-i-s-t-заявка-l';
import IISTРаботаLForm from './forms/i-i-s-t-работа-l';
import IISTСотрудникLForm from './forms/i-i-s-t-сотрудник-l';
import IISTВидРаботыEForm from './forms/i-i-s-t-вид-работы-e';
import IISTЗаданиеEForm from './forms/i-i-s-t-задание-e';
import IISTЗаявкаEForm from './forms/i-i-s-t-заявка-e';
import IISTРаботаEForm from './forms/i-i-s-t-работа-e';
import IISTСотрудникEForm from './forms/i-i-s-t-сотрудник-e';
import IISTВидРаботыModel from './models/i-i-s-t-вид-работы';
import IISTЗаданиеModel from './models/i-i-s-t-задание';
import IISTЗаявкаModel from './models/i-i-s-t-заявка';
import IISTПунктModel from './models/i-i-s-t-пункт';
import IISTРаботаModel from './models/i-i-s-t-работа';
import IISTСотрудникModel from './models/i-i-s-t-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-t-вид-работы': IISTВидРаботыModel,
    'i-i-s-t-задание': IISTЗаданиеModel,
    'i-i-s-t-заявка': IISTЗаявкаModel,
    'i-i-s-t-пункт': IISTПунктModel,
    'i-i-s-t-работа': IISTРаботаModel,
    'i-i-s-t-сотрудник': IISTСотрудникModel
  },

  'application-name': 'T',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'T',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'T',
          title: 'T'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        водоканал: {
          caption: 'Водоканал',
          title: 'Водоканал',
          'i-i-s-t-работа-l': {
            caption: 'Работа',
            title: ''
          },
          'i-i-s-t-задание-l': {
            caption: 'Задание',
            title: ''
          },
          'i-i-s-t-заявка-l': {
            caption: 'Заявка',
            title: 'Заявка'
          },
          'i-i-s-t-вид-работы-l': {
            caption: 'Вид работы',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-t-вид-работы-l': {
            caption: 'Вид работы',
            title: 'Вид работы'
          },
          'i-i-s-t-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-t-заявка-l': {
            caption: 'Заявка',
            title: 'Заявка'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-t-вид-работы-l': IISTВидРаботыLForm,
    'i-i-s-t-задание-l': IISTЗаданиеLForm,
    'i-i-s-t-заявка-l': IISTЗаявкаLForm,
    'i-i-s-t-работа-l': IISTРаботаLForm,
    'i-i-s-t-сотрудник-l': IISTСотрудникLForm,
    'i-i-s-t-вид-работы-e': IISTВидРаботыEForm,
    'i-i-s-t-задание-e': IISTЗаданиеEForm,
    'i-i-s-t-заявка-e': IISTЗаявкаEForm,
    'i-i-s-t-работа-e': IISTРаботаEForm,
    'i-i-s-t-сотрудник-e': IISTСотрудникEForm
  },

});

export default translations;
