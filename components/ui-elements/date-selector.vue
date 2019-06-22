<template>
    <section class="position-relative">
        <div class="border-bottom pb-2 date-view ml-auto mb-3">
            <span class="from">{{fromDate ? fromFormattedDate : '__.__.__'}}</span> -
            <span class="to">{{toDate ? toFormattedDate : '__.__.__'}}</span>
        </div>
        <div class="d-flex">
            <b-button class="d-block ml-auto" @click="openCalendar('from')">
                <i class="far fa-calendar-alt mr-2"></i>
                {{ !isOpenFromDatePicker ? 'From Date' : ''}}
                <i class="fas fa-times" v-if="isOpenFromDatePicker"></i>
            </b-button>

            <b-button class="d-block ml-3" @click="openCalendar('to')">
                <i class="far fa-calendar-alt mr-2"></i>
                {{ !isOpenToDatePicker ? 'To Date' : ''}}
                <i class="fas fa-times" v-if="isOpenToDatePicker"></i>
            </b-button>

            <b-button variant="light ml-3" @click="toggleDateOrder">
                <i class="far fa-clock mr-3"></i>
                <i class="fas fa-arrow-up" v-if="order === 'desc'"></i>
                <i class="fas fa-arrow-down" v-else></i>
            </b-button>
        </div>

        <datepicker @selected="isOpenFromDatePicker = false; selectDate('from', $event)"
                    :input-class="'date-picker-input'"
                    v-model="fromDate"
                    ref="fromDatepicker"
                    class="datepicker ml-auto"
                    :class="{show: isOpenFromDatePicker}"></datepicker>

        <datepicker @selected="isOpenToDatePicker = false; selectDate('to', $event)" :input-class="'date-picker-input'"
                    v-model="toDate"
                    ref="toDatepicker"
                    class="datepicker ml-auto"
                    :class="{show: isOpenToDatePicker}"></datepicker>
    </section>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import * as moment from 'moment';

    export default {
        data() {
            return {
                isOpenFromDatePicker: false,
                isOpenToDatePicker: false,
                fromDate: null,
                toDate: null,
                order: 'desc'
            }
        },
        computed: {
            fromFormattedDate() {
                return moment(this.fromDate).format('LL');
            },
            toFormattedDate() {
                return moment(this.toDate).format('LL');
            }
        },
        methods: {
            openCalendar(type) {
                if (type === 'from') {
                    this.isOpenFromDatePicker = !this.isOpenFromDatePicker;
                    this.$refs.fromDatepicker.showCalendar();
                } else {
                    this.isOpenToDatePicker = !this.isOpenToDatePicker;
                    this.$refs.toDatepicker.showCalendar();
                }
            },
            toggleDateOrder() {
                this.order = this.order === 'desc' ? 'asc' : 'desc';
                this.emitChanges();
            },
            selectDate(type, date) {
                if (type === 'from') {
                    this.fromDate = date;
                } else {
                    this.toDate = date;
                }

                this.emitChanges();
            },
            emitChanges() {
                this.$emit('change', {
                    date: [this.fromDate, this.toDate],
                    order: this.order
                });
            }
        },
        components: {
            Datepicker
        },
    };
</script>

<style scoped lang="scss">
    .date-view {
        padding-left: 10px;
        padding-right: 10px;
        display: table;

        .from {
            margin-right: 15px;
        }

        .to {
            margin-left: 15px;
        }
    }

    .datepicker {
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 100px;
        margin-right: 300px;

        &.show {
            opacity: 1;
            pointer-events: auto;
        }

        /deep/ .date-picker-input {
            display: none;
        }

    }
</style>