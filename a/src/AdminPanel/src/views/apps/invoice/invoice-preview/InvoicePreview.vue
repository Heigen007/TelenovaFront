<template>
  <section class="invoice-preview-wrapper">

    <!-- Alert: No item found -->
    <!-- <b-alert
      variant="danger"
      :show="invInfo === undefined"
    >
      <h4 class="alert-heading">
        Error fetching invoice data
      </h4>
      <div class="alert-body">
        No invoice found with this invoice id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-invoice-list'}"
        >
          Invoice List
        </b-link>
        for other invoices.
      </div>
    </b-alert> -->

    <b-row
      v-if="invInfo"
      class="invoice-preview"
    >

      <!-- Col: Left (Invoice Container) -->
      <b-col
        cols="12"
        xl="9"
        md="8"
      >
        <b-card
          no-body
          class="invoice-preview-card"
        >
          <!-- Header -->
          <b-card-body class="invoice-padding pb-0">

            <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">

              <!-- Header: Left Content -->
              <div>
                <div class="logo-wrapper">
                  <logo />
                  <h3 class="text-primary invoice-logo">
                    Telenova
                  </h3>
                </div>
                <p class="card-text mb-25">
                  Office 149, 450 South Brand Brooklyn
                </p>
                <p class="card-text mb-25">
                  San Diego County, CA 91905, USA
                </p>
                <p class="card-text mb-0">
                  +1 (123) 456 7891, +44 (876) 543 2198
                </p>
              </div>

              <!-- Header: Right Content -->
              <div class="mt-md-0 mt-2">
                <h4 class="invoice-title">
                  Invoice
                  <span class="invoice-number">#{{ invInfo.id }}</span>
                </h4>
                <div class="invoice-date-wrapper">
                  <p class="invoice-date-title">
                    Date Issued:
                  </p>
                  <p class="invoice-date">
                    {{ invInfo.issuedDate }}
                  </p>
                </div>
              </div>
            </div>
          </b-card-body>

          <!-- Spacer -->
          <hr class="invoice-spacing">

          <!-- Invoice Client & Payment Details -->
          <b-card-body
            v-if="invInfo.client"
            class="invoice-padding pt-0"
          >
            <b-row class="invoice-spacing">

              <!-- Col: Invoice To -->
              <b-col
                cols="12"
                class="p-0"
                style='margin: 10px 0 10px 0'
              >
                <h6>
                  Invoice To:
                </h6>
                <h6 class="mb-20">
                  {{ invInfo.client.name }}
                </h6>
                <p class="card-text mb-25">
                  {{ invInfo.client.address }},
                </p>
                <p class="card-text mb-25">
                  {{ invInfo.client.phone }}
                </p>
                <p class="card-text mb-0">
                  {{ invInfo.client.email }}
                </p>
              </b-col>

              <!-- Col: Payment Details -->
              <b-col
                cols="12"
                class="p-0"
                style='margin: 10px 0 10px 0'
              >
                <div>
                  <h6 >
                    Payment Details:
                  </h6>
                  <table>
                    <tbody>
                      <tr>
                        <td class="pr-1">
                          Total Due:
                        </td>
                        <td><span class="font-weight-bold">{{ invInfo.total }} тг.</span></td>
                      </tr>
                      <tr>
                        <td class="pr-1">
                          Pay By:
                        </td>
                        <td>{{ invInfo.paymentMethod }}</td>
                      </tr>
                      <tr>
                        <td class="pr-1">
                          Address:
                        </td>
                        <td>{{ invInfo.client.address }}</td>
                      </tr>
                      <!-- <tr>
                        <td class="pr-1">
                          IBAN:
                        </td>
                        <td>{{ paymentDetails.iban }}</td>
                      </tr>
                      <tr>
                        <td class="pr-1">
                          SWIFT code:
                        </td>
                        <td>{{ paymentDetails.swiftCode }}</td>
                      </tr> -->
                    </tbody>
                  </table>
                </div>
              </b-col>
              <b-col
                cols="12"
                class="p-0"
                style='margin: 10px 0 10px 0'
              >
                <div>
                  <h6>
                    Payment & Delivery:
                  </h6>
                  <table>
                    <tbody>
                      <tr>
                        <td class="pr-1">
                          Payment:
                        </td>
                        <td>{{ invInfo.invoiceStatus }}</td>
                      </tr>
                      <tr>
                        <td class="pr-1">
                          Delivery
                        </td>
                        <td>{{ invInfo.orderStatus }}</td>
                      </tr>
                      <tr>
                        <b-dropdown
                          id="dropdown-6"
                          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                          text="Payment"
                          style='margin-top: 15px;'
                          variant="info"
                        >
                          <b-dropdown-item @click='ChPayment("Paid")'>Paid</b-dropdown-item>
                          <b-dropdown-item @click='ChPayment("notPaid")'>Not Paid</b-dropdown-item>
                        </b-dropdown>
                      </tr>
                      <tr>
                        <b-dropdown
                          id="dropdown-1"
                          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                          text="Delivery"
                          style='margin-top: 15px;'
                          variant="primary"
                        >
                          <b-dropdown-item @click='ChDelivery("preparedForDelivery")'>Prepared For Delivery</b-dropdown-item>
                          <b-dropdown-item @click='ChDelivery("sented")'>Sented</b-dropdown-item>
                          <b-dropdown-item @click='ChDelivery("delivered")'>Delivered</b-dropdown-item>
                        </b-dropdown>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </b-col>
            </b-row>
          </b-card-body>

          <!-- Invoice Description: Table -->
          <b-table-lite
            responsive
            striped hover
            :items="invInfo.goods"
            :fields="['Name', 'count', 'price', 'total']"
          >
            <template #cell(Name)="data">
              <b-card-text class="font-weight-bold mb-25">
                {{ data.Name }}
              </b-card-text>
              <b-card-text class="text-nowrap">
                {{ data.item.Name }}
              </b-card-text>
            </template>
          </b-table-lite>

          <!-- Invoice Description: Total -->
          <b-card-body class="invoice-padding pb-0">
            <b-row>

              <!-- Col: Sales Persion -->
              <b-col
                cols="12"
                md="6"
                class="mt-md-0 mt-3"
                order="2"
                order-md="1"
              >
                <b-card-text class="mb-0">
                  <!-- <span class="font-weight-bold">Salesperson:</span>
                  <span class="ml-75">Alfie Solomons</span> -->
                </b-card-text>
              </b-col>

              <!-- Col: Total -->
              <b-col
                cols="12"
                md="6"
                class="mt-md-6 d-flex justify-content-end"
                order="1"
                order-md="2"
              >
                <div class="invoice-total-wrapper">
                  <div class="invoice-total-item">
                    <p class="invoice-total-title">
                      Subtotal:
                    </p>
                    <p class="invoice-total-amount">
                      {{invInfo.total}} тг.
                    </p>
                  </div>
                  <div class="invoice-total-item">
                    <p class="invoice-total-title">
                      Discount:
                    </p>
                    <p class="invoice-total-amount">
                      0 тг.
                    </p>
                  </div>
                  <!-- <div class="invoice-total-item">
                    <p class="invoice-total-title">
                      Tax:
                    </p>
                    <p class="invoice-total-amount">
                      21%
                    </p>
                  </div> -->
                  <hr class="my-50">
                  <div class="invoice-total-item">
                    <p class="invoice-total-title">
                      Total:
                    </p>
                    <p class="invoice-total-amount">
                      {{invInfo.total}} тг.
                    </p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card-body>

          <!-- Spacer -->
          <hr class="invoice-spacing">

          <!-- Note -->
          <b-card-body class="invoice-padding pt-0">
            <span class="font-weight-bold">Note: </span>
            <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
              projects. Thank You!</span>
          </b-card-body>
        </b-card>
      </b-col>

      <!-- Right Col: Card -->
      <b-col
        cols="12"
        md="4"
        xl="3"
        class="invoice-actions"
      >
        <b-card>

          <!-- Button: Send Invoice -->
          <!-- <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            v-b-toggle.sidebar-send-invoice
            variant="primary"
            class="mb-75"
            block
          >
            Send Invoice
          </b-button> -->

          <!-- Button: DOwnload -->
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            class="mb-75"
            block
            @click='downloadJSON'
          >
            Download
          </b-button>

          <!-- Button: Print -->
          <!-- <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            class="mb-75"
            block
            @click="printInvoice"
          >
            Print
          </b-button> -->

          <!-- Button: Edit -->
          <!-- <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            class="mb-75"
            block
            :to="{ name: 'apps-invoice-edit', params: { id: $route.params.id } }"
          >
            Edit
          </b-button> -->

          <!-- Button: Add Payment -->
          <!-- <b-button
            v-b-toggle.sidebar-invoice-add-payment
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="success"
            class="mb-75"
            block
          >
            Add Payment
          </b-button> -->
        </b-card>
      </b-col>
    </b-row>

    <invoice-sidebar-send-invoice />
    <invoice-sidebar-add-payment />
  </section>
</template>

<script>
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import axios from 'axios'
import {
  BRow, BCol, BCard, BCardBody, BTableLite, BButton, BAlert, BLink, VBToggle, BDropdown, BDropdownItem, BCardText
} from 'bootstrap-vue'
import Logo from '@core/layouts/components/Logo.vue'
import Ripple from 'vue-ripple-directive'
import invoiceStoreModule from '../invoiceStoreModule'
import InvoiceSidebarSendInvoice from '../InvoiceSidebarSendInvoice.vue'
import InvoiceSidebarAddPayment from '../InvoiceSidebarAddPayment.vue'
import { saveAs } from 'file-saver';

export default {
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BTableLite,
    BCardText,
    BButton,
    BAlert,
    BLink,
    BDropdown,
    BDropdownItem,

    Logo,
    InvoiceSidebarAddPayment,
    InvoiceSidebarSendInvoice,
  },
  data(){
    return{
      invInfo: null
    }
  },
  created(){
    var self = this
    axios.get('http://157.230.225.244/order')
    .then(response => {
      var filteredData = JSON.parse(JSON.stringify(response.data))
      for(var i = 0; i < response.data.length; i++){
        var UpdatedGoods = filteredData[i].goods
        for(var y = 0; y < UpdatedGoods.length; y++){
          UpdatedGoods[y] = {
            Name: UpdatedGoods[y].product.offerData.kaspi_name,
            price: UpdatedGoods[y].price/UpdatedGoods[y].count + ' тг.',
            count: UpdatedGoods[y].count,
            total: Number(UpdatedGoods[y].price)+ ' тг.'
          }
        }
        filteredData[i] = {
          id: filteredData[i]._id,
          issuedDate: new Date(filteredData[i].date).toLocaleString().split(',')[0],
          total: filteredData[i].finishPrice,
          avatar: '',
          invoiceStatus: filteredData[i].paymentStatus == 'notPaid' ? 'Not Paid' : 'Paid' ,
          balance: 100,
          dueDate: new Date(filteredData[i].date).toLocaleString().split(',')[0],
          client: {
            address: filteredData[i].address,
            email: filteredData[i].email,
            name: filteredData[i].name,
            phone: filteredData[i].phoneNumber
          },
          paymentMethod: filteredData[i].paymentMethod,
          goods: UpdatedGoods,
          orderStatus: filteredData[i].orderStatus
        }
      }
      var find = filteredData.find(el => el.id == this.$route.params.id)
      self.invInfo = find
      console.log(filteredData,'LLLLLLLLLLLLLLL',find);
    })
    .catch(error => {
      console.log(error)
    })
  },
  setup() {
    const invInfo = ref(null)
    const paymentDetails = ref({})

    // Invoice Description
    // ? Your real data will contain this information

    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const printInvoice = () => {
      window.print()
    }

    return {
      paymentDetails,
      printInvoice,
    }
  },
  methods: {
    ChPayment(type) {
      var self = this
      axios.post('http://157.230.225.244/order/paymentStatus', 
      {
        id: this.invInfo.id,
        paymentStatus: type
      })
      .then(success => {
        self.invInfo.invoiceStatus = type
        console.log(success)
      })
      .catch(error => {
        console.log(error)
      })
    },
    ChDelivery(type) {
      var self = this
      axios.post('http://157.230.225.244/order/orderStatus', 
      {
        id: this.invInfo.id,
        orderStatus: type
      })
      .then(success => {
        self.invInfo.orderStatus = type
        console.log(success)
      })
      .catch(error => {
        console.log(error)
      })
    },
    downloadJSON(){
      var blob = new Blob([JSON.stringify(this.invInfo.goods)], {type: "application/json;charset=utf-8"});
      saveAs(blob, "OrderProducts.json");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss">
@media print {

  // Global Styles
  body {
    background-color: transparent !important;
  }
  nav.header-navbar {
    display: none;
  }
  .main-menu {
    display: none;
  }
  .header-navbar-shadow {
    display: none !important;
  }
  .content.app-content {
    margin-left: 0;
    padding-top: 2rem !important;
  }
  footer.footer {
    display: none;
  }
  .card {
    background-color: transparent;
    box-shadow: none;
  }
  .customizer-toggle {
    display: none !important;
  }

  // Invoice Specific Styles
  .invoice-preview-wrapper {
    .row.invoice-preview {
      .col-md-8 {
        max-width: 100%;
        flex-grow: 1;
      }

      .invoice-preview-card {
        .card-body:nth-of-type(2) {
          .row {
              > .col-12 {
              max-width: 50% !important;
            }

            .col-12:nth-child(2) {
              display: flex;
              align-items: flex-start;
              justify-content: flex-end;
              margin-top: 0 !important;
            }
          }
        }
      }
    }

    // Action Right Col
    .invoice-actions {
      display: none;
    }
  }
}
</style>
