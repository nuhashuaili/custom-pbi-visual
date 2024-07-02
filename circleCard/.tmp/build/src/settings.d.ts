import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
export declare class CircleSettings extends FormattingSettingsCard {
    circleColor: formattingSettings.ColorPicker;
    circleThickness: formattingSettings.NumUpDown;
    circleLineColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class TextSettings extends FormattingSettingsCard {
    textColor: formattingSettings.ColorPicker;
    fontFamily: formattingSettings.FontPicker;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class LabelSettings extends FormattingSettingsCard {
    labelColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
export declare class VisualSettings extends FormattingSettingsModel {
    circle: CircleSettings;
    text: TextSettings;
    label: LabelSettings;
    cards: FormattingSettingsCard[];
}
