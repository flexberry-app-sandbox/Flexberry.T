import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сделано: DS.attr('boolean'),
  работа: DS.belongsTo('i-i-s-t-работа', { inverse: null, async: false }),
  задание: DS.belongsTo('i-i-s-t-задание', { inverse: 'пункт', async: false })
});

export let ValidationRules = {
  сделано: {
    descriptionKey: 'models.i-i-s-t-пункт.validations.сделано.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  работа: {
    descriptionKey: 'models.i-i-s-t-пункт.validations.работа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  задание: {
    descriptionKey: 'models.i-i-s-t-пункт.validations.задание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПунктE', 'i-i-s-t-пункт', {
    сделано: attr('Сделано', { index: 0 }),
    работа: belongsTo('i-i-s-t-работа', 'Работа', {
      план: attr('План', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'план' })
  });
};
