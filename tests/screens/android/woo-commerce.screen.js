class StoreScreen {

    #waitTime = 20000

    async #clickContinueWithWordpress() {
        try {
            let btnContinueWithWordPress = await driver.$("id=com.woocommerce.android:id/button_login_wpcom");
            btnContinueWithWordPress.waitForEnabled({ timeout: this.#waitTime })
            await btnContinueWithWordPress.click(); 
        } catch (error) {
            console.error('Click continue wordpress error:', error);
            throw error;
        }
    }

    async #clickOkPopup() {
        try {
            let btnOkPopup = await driver.$("id=android:id/button1");
            btnOkPopup.waitForEnabled({ timeout: this.#waitTime })
            await btnOkPopup.click();
        } catch (error) {
            console.error('Click Ok popup error: ', error);
            throw error;
        }
    }

    async #setValueEmail(username) {
        try {
            let txtEmailBox = await driver.$("id=com.woocommerce.android:id/input");
            txtEmailBox.waitForEnabled({ timeout: this.#waitTime })
            await txtEmailBox.setValue(username);
        } catch (error) {
            console.error('Set value email error: ', error);
            throw error;
        }
    }

    async #clickContinue() {
        try {
            let btnContinue = await driver.$("id=com.woocommerce.android:id/login_continue_button");
            btnContinue.waitForEnabled({ timeout: this.#waitTime })
            await btnContinue.click();
        } catch (error) {
            console.error('Click continue button error: ', error);
            throw error;
        }
    }

    async #setValuePwd(password) {
        try {
            let txtPwdBox = await driver.$("id=com.woocommerce.android:id/input");
            btnContinue.waitForEnabled({ timeout: this.#waitTime })
            await txtPwdBox.setValue(password);
        } catch (error) {
            console.error('Set password value error: ', error);
            throw error;
        }
    }

    async #clickContinue1() {
        try {
            let btnContinue1 = await driver.$("id=com.woocommerce.android:id/bottom_button");
            btnContinue1.waitForEnabled({ timeout: this.#waitTime })
            await btnContinue1.click();
        } catch (error) {
            console.error('Click continue 1 button error: ', error);
            throw error;
        }
    }

    async #clickDone() {
        try {
            let btnDone = await driver.$("id=com.woocommerce.android:id/button_primary");
            btnDone.waitForEnabled({ timeout: this.#waitTime })
            await btnDone.click();
        } catch (error) {
            console.error('Click Done button error: ', error);
            throw error;
        }
    }

    async openStore() {
        try {
            let btnOpenStore = await driver.$("//android.widget.FrameLayout[@content-desc=\"Products\"]/android.widget.ImageView");
            btnOpenStore.waitForEnabled({ timeout: this.#waitTime })
            await btnOpenStore.click();
        } catch (error) {
            console.error('Open store error:', error);
            throw error;
        }
    }

    async #clickAddProduct() {
        try {
            let btnAddProduct = await driver.$("~Add products");
            btnAddProduct.waitForEnabled({ timeout: this.#waitTime })
            await btnAddProduct.click();
        } catch (error) {
            console.error('Click add product error:', error);
            throw error;
        }
    }

    async #clickPhysicalProduct() {
        try {
            let lblPhysicalProduct = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");
            lblPhysicalProduct.waitForEnabled({ timeout: this.#waitTime })
            await lblPhysicalProduct.click();
        } catch (error) {
            console.error('Click physical product error:', error);
            throw error;
        }
    }

    async #setValueProductName(productName) {
        try {
            let btnProductName = await driver.$("id=com.woocommerce.android:id/editText");
            btnProductName.waitForEnabled({ timeout: this.#waitTime })
            await btnProductName.setValue(productName);
        } catch (error) {
            console.error('Click physical product error:', error);
            throw error;
        }
    }

    async #clickEditProduct() {
        try {
            let txtEditProduct = await driver.$("(//android.widget.ImageView[@content-desc=\"Edit product\"])[1]");
            txtEditProduct.waitForEnabled({ timeout: this.#waitTime })
            await txtEditProduct.click();
        } catch (error) {
            console.error('Click edit product error:', error);
            throw error;
        }
    }

    async #setValueProductDescription(productDescription) {
        try {
            let txtProductDescription = await driver.$("id=com.woocommerce.android:id/visualEditor");
            txtProductDescription.waitForEnabled({ timeout: this.#waitTime })
            await txtProductDescription.setValue(productDescription);
        } catch (error) {
            console.error('Click edit product error:', error);
            throw error;
        }
    }

    async #clickBack() {
        try {
            let btnBack = await driver.$("~Navigate up");
            btnBack.waitForEnabled({ timeout: this.#waitTime })
            await btnBack.click();
        } catch (error) {
            console.error('Click edit product error:', error);
            throw error;
        }
    }

    async #addPrice() {
        try {
            let btnAddPrice = await driver.$("(//android.widget.ImageView[@content-desc=\"Edit product\"])[3]");
            btnAddPrice.waitForEnabled({ timeout: this.#waitTime })
            await btnAddPrice.click();
        } catch (error) {
            console.error('Click add price error:', error);
            throw error;
        }
    }

    async #setValuePrice(productPrice) {
        try {
            let txtAddPrice = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText");
            txtAddPrice.waitForEnabled({ timeout: this.#waitTime })
            await txtAddPrice.setValue(productPrice);
        } catch (error) {
            console.error('Set value price error:', error);
            throw error;
        }
    }

    async #setSalePrice(productSalePrice) {
        try {
            let txtAddSalePrice = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText");
            txtAddSalePrice.waitForEnabled({ timeout: this.#waitTime })
            await txtAddSalePrice.setValue(productSalePrice);
        } catch (error) {
            console.error('Set sale price error:', error);
            throw error;
        }
    }

    async #clickTaxStatus() {
        try {
            let btnTaxStatus = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageButton");
            btnTaxStatus.waitForEnabled({ timeout: this.#waitTime })
            await btnTaxStatus.click();
        } catch (error) {
            console.error('Set tax status error:', error);
            throw error;
        }
    }
    
    async #clickOptTaxStatus() {
        try {
            let optTaxable = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[1]");
            optTaxable.waitForEnabled({ timeout: this.#waitTime })
            await optTaxable.click();
        } catch (error) {
            console.error('Click opt tax status error:', error);
            throw error;
        }
    }

    async #clickAddMoreDetails() {
        try {
            let btnAddMoreDetails = await driver.$("id=com.woocommerce.android:id/productDetail_addMoreButton");
            btnAddMoreDetails.waitForEnabled({ timeout: this.#waitTime })
            await btnAddMoreDetails.click();
        } catch (error) {
            console.error('Click add more details error:', error);
            throw error;
        }
    }

    async #clickOptShipping() {
        try {
            let optShipping = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]");
            optShipping.waitForEnabled({ timeout: this.#waitTime })
            await optShipping.click();
        } catch (error) {
            console.error('Click opt shipping error:', error);
            throw error;
        }
    }


    async #setValueWeight(weight) {
        try {
            let txtWeight = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText");
            txtWeight.waitForEnabled({ timeout: this.#waitTime })
            await txtWeight.setValue(weight);
        } catch (error) {
            console.error('Set value weight error:', error);
            throw error;
        }
    }

    async #setValueLenght(length) {
        try {
            let txtLength = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText");
            txtLength.waitForEnabled({ timeout: this.#waitTime })
            await txtLength.setValue(length);
        } catch (error) {
            console.error('Set value lenght error:', error);
            throw error;
        }
    }

    async #setValueWidth(width) {
        try {
            let txtWidth = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText");
            txtWidth.waitForEnabled({ timeout: this.#waitTime })
            await txtWidth.setValue(width);
        } catch (error) {
            console.error('Set value lenght error:', error);
            throw error;
        }
    }

    async #setValueHeight(height) {
        try {
            let txtHeight = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/androidx.cardview.widget.CardView/android.widget.LinearLayout/android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText");
            txtHeight.waitForEnabled({ timeout: this.#waitTime })
            await txtHeight.setValue(height);
        } catch (error) {
            console.error('Set value lenght error:', error);
            throw error;
        }
    }

    async #clickPublish() {
        try {
            let btnPublish = await driver.$("id=com.woocommerce.android:id/menu_done");
            btnPublish.waitForEnabled({ timeout: this.#waitTime })
            await btnPublish.click();
        } catch (error) {
            console.error('Click publish error:', error);
            throw error;
        }
    }

    async #clickSearch() {
        try {
            let btnSearch = await driver.$("~Search");
            btnSearch.waitForEnabled({ timeout: this.#waitTime })
            await btnSearch.click();
        } catch (error) {
            console.error('Click search error:', error);
            throw error;
        }
    }

    async #setValueSearch(productName) {
        try {
            let txtSearch = await driver.$("id=com.woocommerce.android:id/search_src_text");
            txtSearch.waitForEnabled({ timeout: this.#waitTime })
            await txtSearch.setValue(productName);
        } catch (error) {
            console.error('Set value search error:', error);
            throw error;
        }
    }

    async assertProduct(productName) {
        try {
            let lblProductName = await driver.$("id=com.woocommerce.android:id/linearLayout");
            lblProductName.waitForEnabled({ timeout: this.#waitTime })
            await expect(lblProductName).toHaveValueContaining(productName)
        } catch (error) {
            console.error('Assert product error:', error);
            throw error;
        }
    }

    async login(username, password) {
        await this.#clickContinueWithWordpress()
        await this.#clickOkPopup()
        await this.#setValueEmail(username)
        await this.#clickContinue()
        await this.#setValuePwd(password)
        await this.#clickContinue1()
        await this.#clickDone()
    }

    async addProductNameAndDescription(productName, productDescription) {
    
        await this.#clickAddProduct()
        await this.#clickPhysicalProduct()
        await this.#setValueProductName(productName)
        await this.#clickEditProduct()
        await this.#setValueProductDescription(productDescription)
        await this.#clickBack()
    
    }
    
    async addProductPrice(productPrice, productSalePrice) {
        await this.#addPrice()
        await this.#setValuePrice(productPrice)
        await this.#setSalePrice(productSalePrice)
        await this.#clickTaxStatus()
        await this.#clickOptTaxStatus()
        await this.#clickBack()
    }

    async addShippingDetails(weight, length, width, height) {
        await this.#clickAddMoreDetails()
        await this.#clickOptShipping()
        await this.#setValueWeight(weight)
        await this.#setValueLenght(length)
        await this.#setValueWidth(width)
        await this.#setValueHeight(height)
        await this.#clickBack()
        await this.#clickPublish()
        await this.#clickBack()
    }

    async searchProducts(productName) {
        await this.#clickSearch()
        await this.#setValueSearch(productName)
    }

}