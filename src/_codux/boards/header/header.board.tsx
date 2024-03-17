import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';
import { ComponentWrapper } from '../../board-wrappers/component-wrapper';
import Header_board_module from './header.board.module.scss';

export default createBoard({
    name: 'Header',
    Board: () => (
        <ComponentWrapper>
            <Header className={Header_board_module.header} />
        </ComponentWrapper>
    ),
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 1,
            right: 0,
            left: 0,
        },
    },
});
