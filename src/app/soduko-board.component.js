"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SodukoBoard = (function () {
    function SodukoBoard() {
        this.board = [
            [0, 0, 6, 0, 0, 8, 5, 0, 0],
            [0, 0, 0, 0, 7, 0, 6, 1, 3],
            [0, 0, 0, 0, 0, 0, 0, 0, 9],
            [0, 0, 0, 0, 9, 0, 0, 0, 1],
            [0, 0, 1, 0, 0, 0, 8, 0, 0],
            [4, 0, 0, 5, 3, 0, 0, 0, 0],
            [1, 0, 7, 0, 5, 3, 0, 0, 0],
            [0, 5, 0, 0, 6, 4, 0, 0, 0],
            [3, 0, 0, 1, 0, 0, 0, 6, 0]
        ];
    }
    return SodukoBoard;
}());
SodukoBoard = __decorate([
    core_1.Component({
        selector: 'pm-board',
        templateURL: './soduko-board.component.html'
    })
], SodukoBoard);
exports.SodukoBoard = SodukoBoard;
//# sourceMappingURL=soduko-board.component.js.map