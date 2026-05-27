import { IconEnum } from '../../core/enums/icon.enum';
import { CheckCircleIcon } from '../../shared/assets/icons/check-circle.icon';
import { TrashIcon } from '../../shared/assets/icons/trash.icon';

import type { IconProps } from '../../core/interfaces/icon.interface';

import './icon.css';

function Icon({ type, onClick, ...props }: IconProps) {
    const IconList = {
        [IconEnum.CHECK]: () => <CheckCircleIcon className="icon-svg" {...props} />,
        [IconEnum.DELETE]: () => <TrashIcon className="icon-svg" {...props} />
    } as const;
    
    return (
        <span className={`icon icon--${type}`} onClick={onClick}>
            { IconList[type]() }
        </span>
    );
}

export { Icon };
