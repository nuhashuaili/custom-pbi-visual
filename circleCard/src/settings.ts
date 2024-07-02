/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";
import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

export class CircleSettings extends FormattingSettingsCard{
    //these functions could be formatted to be reused
    public circleColor = new formattingSettings.ColorPicker({
        name: "circleColor",
        displayName: "Color",
        value: { value: "#ffffff" },
        visible: true
    });

    public circleThickness = new formattingSettings.NumUpDown({
        name: "circleThickness",
        displayName: "Thickness",
        value: 2,
        visible: true
    });

    public circleLineColor = new formattingSettings.ColorPicker({
        name: "circleLineColor",
        displayName: "Line Color",
        value: { value: "#ffffff" },
        visible: true
    });

    public name: string = "circle";
    public displayName: string = "Circle";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [this.circleColor, this.circleThickness, this.circleLineColor];
}

export class TextSettings extends FormattingSettingsCard{
    public textColor = new formattingSettings.ColorPicker({
        name: "textColor",
        displayName: "Text Color",
        value: { value: "#ffffff" },
        visible: true
    });
    public fontFamily = new formattingSettings.FontPicker({
        name: "fontFamily",
        displayName: "Font Family",
        value: { value: "sans-serif" },
        visible: true
    });
    public name: string = "text";
    public displayName: string = "Callout Value";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [this.textColor, this.fontFamily];    
}

export class LabelSettings extends FormattingSettingsCard{
    public labelColor = new formattingSettings.ColorPicker({
        name: "labelColor",
        displayName: "Text Color",
        value: { value: "#ffffff" },
        visible: true
    });

    public name: string = "label";
    public displayName: string = "Label";
    public visible: boolean = true;
    public slices: FormattingSettingsSlice[] = [this.labelColor];    
}

export class VisualSettings extends FormattingSettingsModel {
    public circle: CircleSettings = new CircleSettings();
    public text: TextSettings = new TextSettings();
    public label: LabelSettings = new LabelSettings();
    public cards: FormattingSettingsCard[] = [this.circle, this.text, this.label];
}