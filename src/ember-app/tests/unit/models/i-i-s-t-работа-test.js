import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-t-работа', 'Unit | Model | i-i-s-t-работа', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-t-вид-работы',
    'model:i-i-s-t-задание',
    'model:i-i-s-t-заявка',
    'model:i-i-s-t-пункт',
    'model:i-i-s-t-работа',
    'model:i-i-s-t-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
