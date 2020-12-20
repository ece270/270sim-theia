import * as React from 'react';
import { injectable, postConstruct, inject } from 'inversify';
import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import {Led, LedArr, PushButtonGrid, SsDec} from './sim-ext-dev-board-components';

@injectable()
export class SimExtWidget extends ReactWidget {

    static readonly ID = 'sim-ext:widget';
    static readonly LABEL = '270 Verilog Simulator';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = SimExtWidget.ID;
        this.title.label = SimExtWidget.LABEL;
        this.title.caption = SimExtWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    protected render(): React.ReactNode {
        const header = `This is a sample widget which simply calls the messageService
        in order to display an info message to end users.`;
        const pbVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'W', 'X', 'Y', 'Z'];

        return <div id='widget-container'>
            <AlertMessage type='INFO' header={header} />
            <button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message Hi</button>
            <div>
                <div>
                    <SsDec />
                    <SsDec />
                    <SsDec />
                    <SsDec />
                    <SsDec />
                    <SsDec />
                    <SsDec />
                    <SsDec />
                </div>
                <div className="ledarrays">
                    <LedArr num={8} lsize={'5%'} />
                    <Led className="bigLed" size={'8%'} color='rgb(17,17,17)' />
                    <LedArr num={8} lsize={'5%'} />
                </div>
                <div>
                <PushButtonGrid className="pbGrid" name={"pb"} ncols={4} nrows={5} labels={pbVals} onClick={this.pushButtonHandler}/>
                </div>
            </div>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: SimExt Widget Successfully Created! is this working? wtf');
    }

    pushButtonHandler(name: string, ind: number) {
        console.log(name, ind);
    }

}
