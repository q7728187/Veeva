/**
 * Created by fei on 14/10/16.
 */
'use strict';
angular.module('veeva',['ui.router','oc.lazyLoad']);
var app=angular.module("veeva");
app.config(projectRouteConfig);
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });
    //更改url格式配置为html5，去掉#号
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('app', {
            url: '',
            templateUrl: 'views/main.html',
            abstract: true,
            resolve: {
                loadMyFile: _lazyLoad([
                    'css/publicStyle.css',
                    'js/factory/dateAlgorithm.js'
                ])
            }
        })
        //首页
        .state('app.home', {
            url: '/home',
            title: '首页',
            templateUrl: 'views/home.html',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/homeCtrl.js'
                ])
            }
        })
        // 日期
        .state('app.dateAlgorithm', {
            url: '/dateAlgorithm',
            title: '首页',
            templateUrl: 'views/dateAlgorithm.html',
            controller: 'dateAlgorithmCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/dateAlgorithmCtrl.js'

                ])
            }
        })
        //任务
        .state('app.task', {
            url: '/task',
            title: '笔试',
            templateUrl: 'views/task.html',
            controller: 'taskCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/taskCtrl.js',
                    'css/task.css'
                ])
            }
        })



}
