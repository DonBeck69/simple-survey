"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/Rx");
var moment = require("moment/min/moment.min");
var fileSaver = require("file-saver/FileSaver.min");
var PdfService = (function () {
    function PdfService(http) {
        this.http = http;
        this.PutPdfUrl = 'http://40.83.148.236:8081/JiraPdfGenerator/';
        this.GetCssUrl = '/styles.css';
        this.cssHeaders = new http_1.HttpHeaders({ 'Content-Type': 'text/css' });
        this.httpHeaders = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    PdfService.prototype.PostPdf = function (element, hight, width, pdfName) {
        var _this = this;
        this.http.get(this.GetCssUrl, { headers: this.cssHeaders, observe: 'response', responseType: 'text' })
            .toPromise()
            .then(function (cssText) {
            var html = document.createElement("html");
            var head = document.createElement("head");
            var body = document.createElement("body");
            var style = document.createElement("style");
            style.setAttribute("type", "text/css");
            style.appendChild(document.createTextNode(cssText.body));
            head.appendChild(style);
            html.appendChild(head);
            body.appendChild(document.createTextNode(element.outerHTML));
            html.appendChild(body);
            var outerHTML = html.outerHTML;
            outerHTML = outerHTML.replace("&lt;", "<");
            outerHTML = outerHTML.replace("&gt;", ">");
            var finalHtmlString = outerHTML.replace(/(\r\n|\n|\r)/gm, "");
            var data = {
                html: finalHtmlString,
                width: width,
                hight: hight
            };
            _this.http.post(_this.PutPdfUrl, JSON.stringify(data), { headers: _this.httpHeaders, responseType: 'arraybuffer' })
                .toPromise()
                .then(function (response) {
                var file = new Blob([response], { type: 'application/pdf' });
                var todaysDate = new Date();
                var todaysDateFormat = "_" + moment(todaysDate).format("MM/DD/YYYY");
                fileSaver.saveAs(file, pdfName + todaysDateFormat + '.pdf');
            })
                .catch(_this.handleError);
        })
            .catch(this.handleError);
    };
    PdfService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return PdfService;
}());
PdfService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], PdfService);
exports.PdfService = PdfService;
