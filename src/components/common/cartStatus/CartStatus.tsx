import CartItemCount from 'src/components/common/cartItemCount';

import CartStatusVM from 'src/data/viewModels/cart/cartStatusVM';
import lang from 'src/i18n/lang';
import { Language } from 'src/types/language';

import st from './CartStatus.module.css';

type Props = {
  language: Language;
};

function CartStatus({ language }: Props) {
  return (
    <div className={st.wrapper}>
      <span className={st.addedText}>{lang('AddedProducts2', language)}</span>
      <CartItemCount vm={new CartStatusVM()} language={language} />
    </div>
  );
}

export default CartStatus;
