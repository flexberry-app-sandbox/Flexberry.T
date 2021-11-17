import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'T',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'T',
          title: 'T'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        водоканал: {
          caption: 'Водоканал',
          title: 'Водоканал',
          'i-i-s-t-вид-работы-l': {
            caption: 'Вид работы',
            title: ''
          },
          'i-i-s-t-работа-l': {
            caption: 'Работа',
            title: ''
          },
          'i-i-s-t-задание-l': {
            caption: 'Задание',
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
          'i-i-s-t-заявка-l': {
            caption: 'Заявка',
            title: 'Заявка'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
