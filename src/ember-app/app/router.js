import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-t-вид-работы-l');
  this.route('i-i-s-t-вид-работы-e',
  { path: 'i-i-s-t-вид-работы-e/:id' });
  this.route('i-i-s-t-вид-работы-e.new',
  { path: 'i-i-s-t-вид-работы-e/new' });
  this.route('i-i-s-t-задание-l');
  this.route('i-i-s-t-задание-e',
  { path: 'i-i-s-t-задание-e/:id' });
  this.route('i-i-s-t-задание-e.new',
  { path: 'i-i-s-t-задание-e/new' });
  this.route('i-i-s-t-заявка-l');
  this.route('i-i-s-t-заявка-e',
  { path: 'i-i-s-t-заявка-e/:id' });
  this.route('i-i-s-t-заявка-e.new',
  { path: 'i-i-s-t-заявка-e/new' });
  this.route('i-i-s-t-работа-l');
  this.route('i-i-s-t-работа-e',
  { path: 'i-i-s-t-работа-e/:id' });
  this.route('i-i-s-t-работа-e.new',
  { path: 'i-i-s-t-работа-e/new' });
  this.route('i-i-s-t-сотрудник-l');
  this.route('i-i-s-t-сотрудник-e',
  { path: 'i-i-s-t-сотрудник-e/:id' });
  this.route('i-i-s-t-сотрудник-e.new',
  { path: 'i-i-s-t-сотрудник-e/new' });
});

export default Router;
