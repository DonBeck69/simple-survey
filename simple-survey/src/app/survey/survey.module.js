"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var ngx_carousel_1 = require("ngx-carousel");
require("hammerjs");
var participant_component_1 = require("./participant/participant.component");
var SurveyModule = (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        core_1.NgModule({
            declarations: [
                participant_component_1.ParticipantComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                ng2_charts_1.ChartsModule,
                ngx_carousel_1.NgxCarouselModule
            ],
            providers: []
        })
    ], SurveyModule);
    return SurveyModule;
}());
exports.SurveyModule = SurveyModule;
