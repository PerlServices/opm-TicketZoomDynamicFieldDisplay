// --
// Copyright (c) 2022 Perl-Services.de, https://perl-services.de
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var PS = PS || {};

/**
 * @namespace
 * @exports TargetNS as PS.TicketZoomDynamicFieldDisplay
 * @description
 *      This namespace contains the special module functions for the time tracking add on
 */
PS.TicketZoomDynamicFieldDisplay = (function (TargetNS) {
    TargetNS.Init = function() {
        $('.NoCutValue').removeClass('CutValue');
    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(PS.TicketZoomDynamicFieldDisplay || {}));
