import logo from "~/public/logo.svg"

const Checkout = () => {
  return (
    <section className="h-fit w-full border border-[rgba(255,125,31,0.33)] bg-[rgba(255,125,31,0.09)] px-28 py-24 shadow-[inset_0px_0px_19px_0px_rgba(255,125,31,0.25)] lg:w-1/2 lg:rounded-r-[120px]">
      <div className="mb-10 flex items-center space-x-3">
        <img src={logo} alt="logo" />
        <span className="font-semibold">Powdur</span>
      </div>
      <div className="mb-8">
        <span className="mb-2 font-semibold text-secondary">Pay Powdur</span>
        <h2 className="text-4xl font-bold">$ 133.23</h2>
      </div>
      <div className="mb-6 flex flex-col space-y-6">
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <div className="h-12 w-12 bg-zinc-600" />
            <div className="flex flex-col">
              <h4 className="font-bold">Pure Set</h4>
              <div className="flex space-x-2">
                <span className="font-semibold text-secondary">Qty</span>
                <select
                  name="quantity"
                  id="qty"
                  className="bg-[rgba(255,125,31,0.09)]"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          {/* price side */}
          <h4 className="font-bold">$ 65.00</h4>
        </div>
        {/* second product */}
        <div className="flex justify-between">
          <div className="flex space-x-3">
            <div className="h-12 w-12 bg-zinc-600" />
            <div className="flex flex-col">
              <h4 className="font-bold">Pure Set</h4>
              <div className="flex space-x-2">
                <span className="font-semibold text-secondary">Qty</span>
                <select
                  name="quantity"
                  id="qty"
                  className="bg-[rgba(255,125,31,0.09)]"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
          {/* price side */}
          <div className="flex flex-col items-end space-y-2">
            <h4 className="font-bold">$ 64.00</h4>
            <span className="text-sm font-medium text-secondary">
              $ 32.00 each
            </span>
          </div>
        </div>
      </div>
      {/* total section */}
      <div className="flex w-full flex-col items-end">
        <div className="flex w-[257px] items-center justify-between border-b border-b-secondary/20 py-3">
          <h4 className="font-semibold">Subtotal</h4>
          <span className="font-semibold">$ 129.00</span>
        </div>
        <div className="flex w-[257px] items-center justify-between border-b border-b-secondary/20 py-3">
          <h4 className="font-semibold text-secondary">Sales tax (6.5%)</h4>
          <span className="font-semibold text-secondary">$ 4.23</span>
        </div>
        <div className="flex w-[257px] items-center justify-between py-3">
          <h4 className="font-semibold">Total due</h4>
          <span className="font-semibold">$ 133.23</span>
        </div>
      </div>
      {/* footer */}
      <div className="mt-52 flex items-center space-x-6 text-xs font-semibold text-[#FF7D1F]">
        <h5>
          Powered by
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="14"
            viewBox="0 0 34 14"
            fill="none"
            className="ml-2 inline"
          >
            <g clipPath="url(#clip0_40_2608)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34.0448 7.23345C34.0448 4.84094 32.8721 2.95312 30.6308 2.95312C28.3801 2.95312 27.0183 4.84094 27.0183 7.21476C27.0183 10.0278 28.6259 11.4483 30.9334 11.4483C32.0588 11.4483 32.9099 11.1959 33.553 10.8408V8.97169C32.9099 9.28949 32.1723 9.4857 31.2361 9.4857C30.3187 9.4857 29.5054 9.16797 29.4014 8.06519H34.0259C34.0259 7.94367 34.0448 7.45773 34.0448 7.23345ZM29.373 6.34558C29.373 5.28953 30.0255 4.85029 30.6213 4.85029C31.1982 4.85029 31.8129 5.28953 31.8129 6.34558H29.373Z"
                fill="#FF7D1F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.368 2.95312C22.4412 2.95312 21.8455 3.38302 21.5145 3.68208L21.3916 3.10265H19.311V13.9997L21.6752 13.5043L21.6847 10.8595C22.0252 11.1025 22.5264 11.4483 23.3586 11.4483C25.0514 11.4483 26.5928 10.1025 26.5928 7.14C26.5834 4.42973 25.023 2.95312 23.368 2.95312ZM22.8006 9.39225C22.2427 9.39225 21.9117 9.19597 21.6847 8.953L21.6752 5.48579C21.9211 5.21477 22.2616 5.02785 22.8006 5.02785C23.6612 5.02785 24.257 5.98111 24.257 7.20538C24.257 8.45768 23.6707 9.39225 22.8006 9.39225Z"
                fill="#FF7D1F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.0576 2.40183L18.4313 1.89716V0L16.0576 0.495319V2.40183Z"
                fill="#FF7D1F"
              />
              <path
                d="M18.4313 3.11182H16.0576V11.2892H18.4313V3.11182Z"
                fill="#FF7D1F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5138 3.80332L13.3625 3.11174H11.3198V11.2892H13.684V5.7472C14.242 5.02759 15.1877 5.15843 15.4809 5.26123V3.11174C15.1782 2.99959 14.0718 2.79399 13.5138 3.80332Z"
                fill="#FF7D1F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.78548 1.08398L6.47796 1.56996L6.46851 9.05577C6.46851 10.439 7.5182 11.4576 8.91787 11.4576C9.69328 11.4576 10.2607 11.3175 10.5728 11.1493V9.25205C10.2702 9.37357 8.77599 9.80344 8.77599 8.42031V5.10261H10.5728V3.11199H8.77599L8.78548 1.08398Z"
                fill="#FF7D1F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.39259 5.4858C2.39259 5.12131 2.69522 4.98113 3.19642 4.98113C3.91515 4.98113 4.82301 5.19608 5.54174 5.57924V3.38302C4.75681 3.07462 3.98135 2.95312 3.19642 2.95312C1.27668 2.95312 0 3.94376 0 5.59794C0 8.17733 3.59362 7.76615 3.59362 8.87824C3.59362 9.30818 3.21534 9.44832 2.68576 9.44832C1.90083 9.44832 0.898407 9.13059 0.104026 8.70072V10.925C0.983514 11.2988 1.87247 11.4577 2.68576 11.4577C4.65279 11.4577 6.00512 10.495 6.00512 8.82217C5.99567 6.03718 2.39259 6.53251 2.39259 5.4858Z"
                fill="#FF7D1F"
              />
            </g>
            <defs>
              <clipPath id="clip0_40_2608">
                <rect width="34" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h5>
        <div className="h-5 border-l border-l-[#FF7D1F]" />
        <span>Terms</span>
        <span>Privacy</span>
      </div>
    </section>
  )
}

export default Checkout
