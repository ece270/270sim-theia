import { ContainerModule } from 'inversify';
import { SimExtWidget } from './sim-ext-widget';
import { SimExtContribution } from './sim-ext-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, SimExtContribution);
    bind(FrontendApplicationContribution).toService(SimExtContribution);
    bind(SimExtWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: SimExtWidget.ID,
        createWidget: () => ctx.container.get<SimExtWidget>(SimExtWidget)
    })).inSingletonScope();
});
