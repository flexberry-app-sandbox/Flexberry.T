import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  сотрудник: DS.belongsTo('i-i-s-t-сотрудник', { inverse: null, async: false }),
  пункт: DS.hasMany('i-i-s-t-пункт', { inverse: 'задание', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-t-задание.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-t-задание.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пункт: {
    descriptionKey: 'models.i-i-s-t-задание.validations.пункт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаданиеE', 'i-i-s-t-задание', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-t-сотрудник', 'Сотрудник', {
      фамилия: attr('Фамилия', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фамилия' }),
    пункт: hasMany('i-i-s-t-пункт', 'Пункт', {
      сделано: attr('Сделано', { index: 0 }),
      работа: belongsTo('i-i-s-t-работа', 'Работа', {
        план: attr('План', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'план' })
    })
  });

  modelClass.defineProjection('ЗаданиеL', 'i-i-s-t-задание', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-t-сотрудник', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
