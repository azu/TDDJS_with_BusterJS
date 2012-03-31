/**
 * Created by azu.
 * Date: 12/03/10 20:47
 * License: MIT License
 */

var assert = buster.assertions.assert;
var refute = buster.assertions.refute;
var tabController = tddjs.ui.tabController;
var log = buster.console.log.bind(buster.console);
buster.testCase("TabControllerCreateTest", {
    setUp : function(){
        "use strict";
        this.tabs = document.getElementById("tabs");
    },
    "test should fail without element" : function(){
        assert.exception(function(){
            "use strict";
            tabController.create();
        }, "TypeError");
    },

    "test should fail without element class" : function(){
        assert.exception(function(){
            tabController.create({});
        }, "TypeError");
    },
    "test return object" : function(){
        var controller = tabController.create(this.tabs);
        assert.isObject(controller);
    },
    "test should add js-tabs class name to element" : function(){
        var tabs = tabController.create(this.tabs);
        assert.className(this.tabs, "js-tab-controller");
    }
});
buster.testCase("Tabbed Controller ActiveTab Teb", {
    setUp : function(){
        this.tabs = document.getElementById("tabs");
        this.controller = tabController.create(this.tabs);
        this.links = this.tabs.getElementsByTagName("a");
        this.list = this.tabs.getElementsByTagName("li");
    },
    "test should not fail without anchor" : function(){
        var controller = this.controller;
        refute.exception(function(){
            controller.activateTab();
        });
    },
    "test should mark anchor as active" : function(){
        this.controller.activeTab(this.links[0]);
        assert.className(this.links[0], "active-tab");
    }
});