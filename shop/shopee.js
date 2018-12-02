const {By} = require('selenium-webdriver');

class Shopee {
  constructor(driver) {
    this.driver = driver;
    this.isLoggedIn = false;
    this.config = {
      page : {
        main : {
          url : "https://shopee.co.id/",
          selector : {
            avatar : "shopee-avatar",
          }
        },
        sale : {
          url : "https://shopee.co.id/flash_sale", 
          selector : {
            futureSale : ".flash-sale-session-picker ul.image-carousel__item-list li:not(:first-child) .flash-sale-session__display-hour"
          }
        },
        cart : {
          url : "https://shopee.co.id/cart",
          selector : {
            voucherbt : ".cart-page-footer [class=^stardust-button]",
            popupsubmit : ".shopee-popup-form__footer > button:last-child",
            selectAll : ".cart-page-footer__row .stardust-checkbox",
            checkeditem : ".stardust-checkbox.stardust-checkbox--checked",
            checkout : ".cart-page-footer__checkout",
          }
        },
        checkout : {
          url : "https://shopee.co.id/checkout/",
        }

      }
    }

    this.saletime = null;
  };

  go() {
    this.driver.get(this.config.page.main.url).then((response) => {
      Promise.resolve(true);
    });
  }
  
  isLogin() {
    console.log("cek");
    var self = this;
    this.driver.findElements(By.className(this.config.page.main.selector.avatar))
      .then((avatar) => {
        console.log(avatar.length);
        return avatar.length === 0 ? false : true;
      });
  }

  checkout(){

  }

  static goToUrl(){

  }
}

module.exports = Shopee;