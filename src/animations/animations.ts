import {NgModule} from "@angular/core";

import {Collapse} from "./collapse/collapse";

export * from "./collapse/collapse";

const animationModules = [

];

const animationExports = [
    ...animationModules,
    Collapse
];

@NgModule({
    imports: animationModules,
    exports: animationExports
})
export class FuiAnimationsModule { }
