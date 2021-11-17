import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-t-задание', 'Unit | Serializer | i-i-s-t-задание', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-t-задание',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
