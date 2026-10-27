<script setup>

import BarChart from './components/BarChart.vue'

import { ref } from 'vue'

const isOpenMenu = ref(false)
</script>

<template>
  <header class="oz__header">
    <section class="oz__header__left">
      <div class="oz__header__left__icon" :class="{ 'open': isOpenMenu }" @click="isOpenMenu = !isOpenMenu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img class="oz__header__left__logo" alt="" src="" />
      <! -- make these on click -->
        <div class="oz__header__dropdown">
          <button class="oz__header__dropdown__button">app type
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </button>
          <div class="oz__header__dropdown__content">
            <a href="#">budget tracker</a>
            <a href="#">notes</a>
            <a href="#">life tracker</a>
          </div>
        </div>
        <div class="oz__header__dropdown">
          <button class="oz__header__dropdown__button">year
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </button>
          <div class="oz__header__dropdown__content">
            <a href="#">2026</a>
            <a href="#">2027</a>
            <a href="#">2028</a>
          </div>
        </div>
    </section>
    <section class="oz__header__nav">
      <nav>
        <ul>
          <li><a>dashboard</a></li>
          <li><a>budget</a></li>
          <li><a>actuals</a></li>
          <li><a>transactions</a></li>
        </ul>
      </nav>
    </section>
    <section class="oz__header__data">
      <a href="#" class="oz__header__data__import">import data</a>
      <a href="#" class="oz__header__data__export">Export data</a>
      <a href="#" class="oz__header__data__icon">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
      </a>
    </section>
  </header>
  <main>
    <section class="oz__overview__tabs">
      <div class="oz__overview__tab">
        <div><font-awesome-icon icon="fa-solid fa-hand-holding-dollar" /></div>
        <div class="oz__overview__tab__content">
          <div class="oz__overview__tab__content__header">
            <h6>income</h6>
            <span><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></span>
          </div>
          <div class="oz__overview__tab__content__budget">
            <p>budget</p>
            <h3>$1,999,999.99</h3>
          </div>
          <div class="oz__overview__tab__content__actual">
            <p>actual</p>
            <h3>$2,999,999.99</h3>
          </div>
        </div>
      </div>
      <div class="oz__overview__tab">
        <div><font-awesome-icon icon="fa-solid fa-piggy-bank" /></div>
        <div class="oz__overview__tab__content">
          <div class="oz__overview__tab__content__header">
            <h6>savesting</h6>
            <span><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></span>
          </div>
          <div class="oz__overview__tab__content__budget">
            <p>budget</p>
            <h3>$1,999,999.99</h3>
          </div>
          <div class="oz__overview__tab__content__actual">
            <p>actual</p>
            <h3>$2,999,999.99</h3>
          </div>
        </div>
      </div>
      <div class="oz__overview__tab">
        <div><font-awesome-icon icon="fa-solid fa-coins" /></div>
        <div class="oz__overview__tab__content">
          <div class="oz__overview__tab__content__header">
            <h6>expenses</h6>
            <span><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></span>
          </div>
          <div class="oz__overview__tab__content__budget">
            <p>budget</p>
            <h3>$1,999,999.99</h3>
          </div>
          <div class="oz__overview__tab__content__actual">
            <p>actual</p>
            <h3>$2,999,999.99</h3>
          </div>
        </div>
      </div>
      <div class="oz__overview__tab">
        <div><font-awesome-icon icon="fa-solid fa-receipt" /></div>
        <div class="oz__overview__tab__content">
          <div class="oz__overview__tab__content__header">
            <h6>bill</h6>
            <span><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></span>
          </div>
          <div class="oz__overview__tab__content__budget">
            <p>budget</p>
            <h3>$1,999,999.99</h3>
          </div>
          <div class="oz__overview__tab__content__actual">
            <p>actual</p>
            <h3>$2,999,999.99</h3>
          </div>
        </div>
      </div>
      <div class="oz__overview__tab">
        <div><font-awesome-icon icon="fa-solid fa-sack-xmark" /></div>
        <div class="oz__overview__tab__content">
          <div class="oz__overview__tab__content__header">
            <h6>debit</h6>
            <span><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></span>
          </div>
          <div class="oz__overview__tab__content__budget">
            <p>budget</p>
            <h3>$1,999,999.99</h3>
          </div>
          <div class="oz__overview__tab__content__actual">
            <p>actual</p>
            <h3>$2,999,999.99</h3>
          </div>
        </div>
      </div>
    </section>
    <section>
      <BarChart />
    </section>
  </main>
  <footer>
  </footer>
</template>

<style scoped>
/* Nine circle menu  */
.oz__header__left__icon {
  width: 30px;
  height: 30px;
  position: relative;
  transition: 0.1s;
  display: inline-block;
  cursor: pointer;
}

.oz__header__left__icon span {
  width: 5px;
  height: 5px;
  background-color: var(--color-text);
  display: block;
  border-radius: 50%;
  position: absolute;
}

.oz__header__left__icon:hover span {
  transform: scale(1.2);
  transition: 350ms cubic-bezier(0.8, 0.5, 0.2, 1.4);
}

.oz__header__left__icon span:nth-child(1) {
  top: 0px;
  left: 0px;
}

.oz__header__left__icon span:nth-child(2) {
  top: 0px;
  left: 12px;
}

.oz__header__left__icon span:nth-child(3) {
  top: 0px;
  right: 0px;
}

.oz__header__left__icon span:nth-child(4) {
  top: 12px;
  left: 0px;
}

.oz__header__left__icon span:nth-child(5) {
  position: absolute;
  top: 12px;
  left: 12px;
}

.oz__header__left__icon span:nth-child(6) {
  top: 12px;
  right: 0px;
}

.oz__header__left__icon span:nth-child(7) {
  left: 0px;
  bottom: 0px;
}

.oz__header__left__icon span:nth-child(8) {
  position: absolute;
  left: 12px;
  bottom: 0px;
}

.oz__header__left__icon span:nth-child(9) {
  right: 0px;
  bottom: 0px;
}

.oz__header__left__icon.open {
  transform: rotate(180deg);
  transition: 0.2s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  cursor: pointer;
}

.oz__header__left__icon.open span {
  transition: 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  transition-delay: 200ms;
  border-radius: 50%;
}

.oz__header__left__icon.open span:nth-child(2) {
  top: 6px;
  left: 6px;
}

.oz__header__left__icon.open span:nth-child(4) {
  top: 18px;
  left: 6px;
}

.oz__header__left__icon.open span:nth-child(6) {
  top: 6px;
  right: 6px;
}

.oz__header__left__icon.open span:nth-child(8) {
  left: 18px;
  bottom: 6px;
}

.oz__header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.oz__header__left,
.oz__header__nav nav ul,
.oz__overview__tabs {
  display: flex;
  align-items: center;
}

.oz__header__dropdown {
  position: relative;
}

.oz__header__dropdown__button {
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
}

/* Dropdown content */
.oz__header__dropdown__content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

/* Links inside dropdown content */
.oz__header__dropdown__content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.oz__header__dropdown__content a:hover {
  background-color: #f1f1f1
}

/* Show the dropdown content on hover */
.oz__header__dropdown:hover .oz__header__dropdown__content {
  display: block;
}

/* Change background color of dropdown button on hover */
.oz__header__dropdown:hover .oz__header__dropdown__button {
  background-color: #3e8e41;
}

.oz__header__nav nav ul li {
  padding: 16px;
}

.oz__header__nav nav ul li {
  text-transform: capitalize;
}

.oz__header__data a {
  padding: 16px;
  text-transform: capitalize;
}

.oz__overview__tabs {
  justify-content: space-between;
}
</style>
