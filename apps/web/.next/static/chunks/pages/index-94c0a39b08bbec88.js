;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7314: function (e, i, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(2808)
        },
      ])
    },
    2808: function (e, i, t) {
      'use strict'
      t.r(i),
        t.d(i, {
          default: function () {
            return v
          },
        })
      var n = t(2322),
        a = t(7729),
        r = t.n(a),
        s = t(8245),
        o = t(5632)
      let l = () => {
        let e = (0, o.useRouter)(),
          [i] = (0, s.ac)('(min-width: 48em)'),
          t = (t) => {
            i &&
              t &&
              (t > 0 && e.push('/#Technologies', void 0, { scroll: !1 }),
              t < 0 && e.push('/#Home', void 0, { scroll: !1 }))
          }
        return (0, n.jsxs)(s.W2, {
          id: 'Contact',
          direction: 'column',
          bgGradient: 'linear(to-l,'
            .concat(s.O9.white.background, ', ')
            .concat(s.O9.white.background, ')'),
          changePage: t,
          paddingTop: 66,
          children: [
            (0, n.jsx)(s.X6, {
              variant: 'title',
              color: '#696969',
              marginBottom: ['135px', '135px', '40px'],
              fontSize: ['40px', '40px', '50px'],
              lineHeight: ['48px', '48px', '51px'],
              children: 'Contact',
            }),
            (0, n.jsx)(s.xv, {
              variant: 'subtitle',
              display: ['none', 'none', 'flex'],
              color: '#696969',
              marginBottom: '37px',
              children:
                'We make your ideas for web services a reality with a incredible Tech Stack',
            }),
            (0, n.jsxs)(s.Kq, {
              spacing: '47px',
              direction: 'column',
              width: ['294px', '294px', '513px'],
              children: [
                (0, n.jsx)(s.Wz, { placeholder: 'Name' }),
                (0, n.jsx)(s.Wz, { placeholder: 'Email' }),
                (0, n.jsx)(s.Wz, {
                  placeholder: 'Describe your project here!',
                }),
                (0, n.jsxs)(s.Kq, {
                  spacing: ['15px', '15px', '25px'],
                  direction: 'row',
                  children: [
                    (0, n.jsx)(s.zx, {
                      variant: 'contact',
                      children: 'A website',
                    }),
                    (0, n.jsx)(s.zx, {
                      variant: 'contact',
                      children: 'Modernization',
                    }),
                    (0, n.jsx)(s.zx, {
                      variant: 'contact',
                      children: 'A website',
                    }),
                  ],
                }),
                (0, n.jsx)(s.zx, { variant: 'send', children: 'SEND' }),
              ],
            }),
          ],
        })
      }
      var x = t(8191)
      let p = (0, x.I)({
        displayName: 'BigLogo',
        viewBox: '0 0 189 243',
        path: [
          (0, n.jsx)('path', {
            d: 'M0 29.7676L27.4372 19.1469L132.723 231.977L105.286 242.598L0 29.7676Z',
            fill: '#B181FF',
          }),
          (0, n.jsx)('path', {
            d: 'M56.2773 10.6207L83.7145 0L189 212.83L161.563 223.451L56.2773 10.6207Z',
            fill: '#B181FF',
          }),
          (0, n.jsx)('path', {
            d: 'M94.9557 88.849L109.952 119.164L179.021 13.2463L153.084 0L94.9557 88.849Z',
            fill: '#7853B6',
          }),
          (0, n.jsx)('path', {
            d: 'M76.1769 117.622L90.8644 147.312L28.8228 243L2.88601 229.754L76.1769 117.622Z',
            fill: '#7853B6',
          }),
        ],
      })
      var c = t(9097),
        u = t.n(c)
      let d = () => {
        let e = (0, o.useRouter)(),
          [i] = (0, s.ac)('(min-width: 48em)'),
          t = (t) => {
            i &&
              t &&
              (t > 0 && e.push('/#Contact', void 0, { scroll: !1 }),
              t < 0 && e.push('/#Services', void 0, { scroll: !1 }))
          }
        return (0, n.jsx)(s.W2, {
          id: 'Home',
          direction: 'row',
          bgGradient: 'linear(to-l,'
            .concat(s.O9.black.lightBackground, ', ')
            .concat(s.O9.black.darkBackground, ')'),
          changePage: t,
          paddingTop: 66,
          children: (0, n.jsxs)(s.kC, {
            align: 'center',
            width: '100%',
            justify: ['center', 'center', 'center', 'space-between'],
            marginLeft: ['none', 'none', 'none', '65px', '139px'],
            children: [
              (0, n.jsxs)(s.kC, {
                direction: 'column',
                width: ['300px', '300px', '567px'],
                align: ['center', 'center', 'start'],
                children: [
                  (0, n.jsx)(s.X6, {
                    variant: 'title',
                    marginBottom: ['29px', '29px', '31px'],
                    textAlign: ['center', 'center', 'start'],
                    fontSize: ['40px', '40px', '50px'],
                    lineHeight: ['48px', '48px', '51px'],
                    children: 'Transform your vision into a stunning reality!',
                  }),
                  (0, n.jsx)(s.xv, {
                    variant: 'subtitle',
                    marginBottom: ['29px', '29px', '20px'],
                    textAlign: 'center',
                    children:
                      'We make your ideas for web services a reality with a incredible Tech Stack',
                  }),
                  (0, n.jsx)(s.zx, {
                    variant: 'service',
                    onClick: () => e.push('/#Contact', void 0, { scroll: !1 }),
                    children: 'Request a service!',
                  }),
                  (0, n.jsx)(u(), {
                    href: '#Services',
                    scroll: !1,
                    title: 'Services',
                    children: (0, n.jsx)(s._i, {}),
                  }),
                  (0, n.jsx)(s.us, {}),
                ],
              }),
              (0, n.jsx)(p, {
                width: '189px',
                height: '243px',
                display: ['none', 'none', 'none', 'flex'],
                marginRight: ['none', 'none', '100px', '65px', '139px'],
              }),
            ],
          }),
        })
      }
      var h = t(2784)
      let C = () => {
          let e = (0, o.useRouter)(),
            [i] = (0, s.ac)('(min-width: 48em)'),
            [t, a] = (0, h.useState)('ux'),
            r = (t) => {
              i &&
                t &&
                (t > 0 && e.push('/#Home', void 0, { scroll: !1 }),
                t < 0 && e.push('/#Technologies', void 0, { scroll: !1 }))
            }
          return (0, n.jsxs)(s.W2, {
            id: 'Services',
            direction: 'column',
            bgGradient: 'linear(to-l,'
              .concat(s.O9.purple.lightBackground, ', ')
              .concat(s.O9.purple.darkBackground, ')'),
            changePage: r,
            paddingTop: 66,
            children: [
              (0, n.jsx)(s.X6, {
                variant: 'title',
                marginBottom: ['112px', '112px', '64px'],
                marginTop: ['100px', '100px', '0px'],
                marginX: '45px',
                width: ['280px', '280px', '600px'],
                textAlign: 'center',
                fontSize: ['40px', '40px', '50px'],
                lineHeight: ['48px', '48px', '51px'],
                children: 'We help clients with',
              }),
              (0, n.jsxs)(s.kC, {
                direction: ['column', 'column', 'row'],
                children: [
                  (0, n.jsxs)(s.Kq, {
                    direction: 'column',
                    spacing: '28px',
                    display: ['none', 'none', 'none', 'none', 'flex'],
                    marginRight: '48px',
                    children: [
                      (0, n.jsx)(s.zx, {
                        variant: 'about',
                        onClick: () => {
                          a('ux')
                        },
                        children: 'UI/UX Design',
                      }),
                      (0, n.jsx)(s.zx, {
                        variant: 'about',
                        onClick: () => {
                          a('dev')
                        },
                        children: 'Development',
                      }),
                      (0, n.jsx)(s.zx, {
                        variant: 'about',
                        onClick: () => {
                          a('maintain')
                        },
                        children: 'Mainantance',
                      }),
                    ],
                  }),
                  (0, n.jsxs)(s.kC, {
                    direction: 'column',
                    justify: 'center',
                    children: [
                      (0, n.jsx)(s.X6, {
                        variant: 'services',
                        marginBottom: ['36px', '36px', '28px'],
                        textAlign: ['center', 'center', 'start'],
                        fontSize: ['30px', '30px', '40px'],
                        lineHeight: ['36px', '36px', '48px'],
                        fontWeight: [600, 600, 800],
                        display:
                          'ux' !== t ? ['unset', 'unset', 'none'] : 'unset',
                        children: 'UI/UX Design',
                      }),
                      (0, n.jsxs)(s.xv, {
                        variant: 'paragraph',
                        width: ['340px', '340px', '650px'],
                        display:
                          'ux' !== t ? ['unset', 'unset', 'none'] : 'unset',
                        children: [
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper enim ut auctor dictum. Ut a bibendum turpis, ac interdum neque. Phasellus molestie leo eget congue pretium. Sed luctus risus in odio feugiat imperdiet. Phasellus commodo metus quis neque vestibulum, in posuere nisi aliquam. Mauris lectus risus, porta non tellus vitae, dapibus euismod orci. Morbi lacinia mattis justo, facilisis auctor diam lacinia et. Donec feugiat metus at',
                          ' ',
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsxs)(s.kC, {
                    direction: 'column',
                    justify: 'center',
                    children: [
                      (0, n.jsx)(s.X6, {
                        variant: 'services',
                        marginBottom: ['36px', '36px', '28px'],
                        marginTop: ['105px', '105px', 'auto'],
                        display:
                          'dev' !== t ? ['unset', 'unset', 'none'] : 'unset',
                        textAlign: ['center', 'center', 'start'],
                        fontSize: ['30px', '30px', '40px'],
                        lineHeight: ['36px', '36px', '48px'],
                        fontWeight: [600, 600, 800],
                        children: 'Development',
                      }),
                      (0, n.jsx)(s.xv, {
                        variant: 'paragraph',
                        width: ['340px', '340px', '650px'],
                        display:
                          'dev' !== t ? ['unset', 'unset', 'none'] : 'unset',
                        marginBottom: 'auto',
                        children:
                          'Morbi maximus, purus in aliquet molestie, nisl nisl aliquet sem, ut imperdiet est massa nec sem. Fusce vestibulum dui ac fringilla varius. In vestibulum lorem et lectus sollicitudin tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras non dui eget odio suscipit consectetur suscipit hendrerit orci. Quisque fringilla massa et tortor sagittis tempor vitae eget urna. Suspendisse id ligula eu lectus',
                      }),
                    ],
                  }),
                  (0, n.jsxs)(s.kC, {
                    direction: 'column',
                    justify: 'center',
                    children: [
                      (0, n.jsx)(s.X6, {
                        variant: 'services',
                        marginBottom: ['36px', '36px', '28px'],
                        marginTop: ['105px', '105px', 'auto'],
                        display:
                          'maintain' !== t
                            ? ['unset', 'unset', 'none']
                            : 'unset',
                        textAlign: ['center', 'center', 'start'],
                        fontSize: ['30px', '30px', '40px'],
                        lineHeight: ['36px', '36px', '48px'],
                        fontWeight: [600, 600, 800],
                        children: 'Maintenance',
                      }),
                      (0, n.jsx)(s.xv, {
                        variant: 'paragraph',
                        width: ['340px', '340px', '650px'],
                        marginBottom: ['150px', '150px', 'auto'],
                        display:
                          'maintain' !== t
                            ? ['unset', 'unset', 'none']
                            : 'unset',
                        children:
                          'In ultricies tempus nunc, in condimentum mi placerat sit amet. Aliquam rutrum velit id tortor egestas laoreet. Nullam molestie nulla nec tempus vehicula. Vivamus et ligula sit amet mi commodo efficitur. Suspendisse potenti. Etiam turpis neque, aliquam nec erat ac, hendrerit rhoncus tortor.',
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(u(), {
                href: '#Technologies',
                scroll: !1,
                title: 'Technologies',
                children: (0, n.jsx)(s._i, {}),
              }),
            ],
          })
        },
        m = (0, x.I)({
          displayName: 'Typescript',
          viewBox: '0 0 105 69',
          path: (0, n.jsx)('path', {
            d: 'M87.7756 0.617973C91.3402 1.44726 94.5794 3.31383 97.0844 5.98216C98.4642 7.42627 99.6623 9.03362 100.652 10.7685C100.698 10.9569 94.2285 15.3035 90.3048 17.7281C90.1624 17.8244 89.5971 17.2088 88.9564 16.2625C88.2396 15.0304 87.2223 14.0001 85.9993 13.2678C84.7764 12.5355 83.3878 12.1251 81.9633 12.075C77.4534 11.7651 74.5472 14.1268 74.5682 18.0757C74.5292 19.0458 74.7504 20.0087 75.2089 20.8645C76.2013 22.9164 78.0438 24.1475 83.8309 26.6559C94.4839 31.2412 99.0567 34.2645 101.879 38.5609C103.474 41.2755 104.457 44.3061 104.758 47.4404C105.059 50.5746 104.671 53.7368 103.621 56.7053C102.178 59.9608 99.8906 62.7709 96.9953 64.8437C94.0999 66.9165 90.7026 68.1766 87.1558 68.4932C83.3857 68.9256 79.5764 68.8862 75.8161 68.3759C70.0561 67.4295 64.7501 64.6649 60.674 60.4867C59.1339 58.7524 57.8301 56.822 56.7964 54.7456C57.231 54.4223 57.6887 54.1312 58.1657 53.8746C58.8274 53.4977 61.3315 52.0572 63.6932 50.6879L67.9812 48.1754L68.8774 49.4819C70.3867 51.6403 72.3079 53.479 74.5305 54.8922C76.7751 56.1233 79.3177 56.7068 81.8745 56.5774C84.4314 56.448 86.902 55.6109 89.0109 54.1593C90.0987 53.0991 90.7787 51.6898 90.9318 50.1785C91.085 48.6672 90.7014 47.1502 89.8484 45.8932C88.6926 44.2392 86.3309 42.8489 79.6183 39.9386C74.3548 38.1638 69.5607 35.222 65.5944 31.3333C63.7055 29.1808 62.3105 26.641 61.5074 23.8921C60.9135 20.7606 60.8258 17.5541 61.2477 14.3948C62.0357 10.7594 63.9223 7.45414 66.6518 4.92688C69.3813 2.39962 72.8218 0.772581 76.507 0.266224C80.2596 -0.18219 84.0582 -0.0636153 87.7756 0.617973ZM52.8392 6.82803L52.8853 12.9167H33.4972V67.9739H19.825V12.9292H0.436862V6.94947C0.385298 4.90166 0.441208 2.85255 0.604362 0.810596C0.67555 0.714283 12.4634 0.668221 26.7553 0.693347L52.7639 0.764535L52.8392 6.82803Z',
            fill: 'white',
          }),
        }),
        g = (0, x.I)({
          displayName: 'Mongo',
          viewBox: '0 0 122 122',
          path: [
            (0, n.jsx)('path', {
              d: 'M56.1456 11.2706L58.7896 16.2365C59.384 17.153 60.028 17.9641 60.7865 18.7195C63.0103 20.9156 65.0831 23.2594 66.9908 25.735C71.4707 31.6173 74.4923 38.1498 76.6502 45.2147C77.9443 49.5305 78.6471 53.9577 78.6997 58.4345C78.9164 71.8183 74.3282 83.3105 65.0775 92.8616C63.5728 94.3762 61.9472 95.7657 60.2168 97.0163C59.3004 97.0163 58.867 96.3136 58.4893 95.6665C57.8015 94.4667 57.3437 93.1489 57.1395 91.7811C56.8144 90.1619 56.6008 88.5427 56.706 86.8709V86.1155C56.6317 85.9545 55.8237 11.6514 56.1456 11.2706Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M56.1457 11.1065C56.0373 10.8898 55.9289 11.0539 55.8206 11.1591C55.8732 12.2427 55.4955 13.2087 54.9042 14.1313C54.254 15.0477 53.3933 15.7505 52.5296 16.5059C47.7308 20.6606 43.9538 25.6792 40.929 31.2922C36.9043 38.8463 34.83 46.9422 34.2417 55.4654C33.9724 58.5397 35.2139 69.388 36.1829 72.518C38.8269 80.8275 43.5761 87.7903 49.7277 93.8336C51.2386 95.2887 52.8546 96.6386 54.5265 97.9358C55.0125 97.9358 55.0652 97.5024 55.1766 97.1804C55.3897 96.4914 55.5522 95.7878 55.6627 95.0751L56.7463 86.9823L56.1457 11.1065Z',
              fill: '#C1C1C1',
            }),
            (0, n.jsx)('path', {
              d: 'M58.7896 100.304C58.898 99.0658 59.4924 98.038 60.1394 97.0132C59.4893 96.7439 59.0063 96.2083 58.6286 95.6108C58.3029 95.045 58.0333 94.4488 57.8237 93.8306C57.0682 91.5643 56.9073 89.1866 56.6905 86.8709V85.4684C56.4212 85.6851 56.3655 87.5179 56.3655 87.7904C56.2079 90.2379 55.8831 92.6719 55.3933 95.0751C55.2323 96.0473 55.124 97.0163 54.5265 97.8801C54.5265 97.9884 54.5265 98.0968 54.5791 98.2578C55.5512 101.118 55.8175 104.032 55.9816 107.001V108.084C55.9816 109.378 55.9289 109.106 57.0032 109.539C57.4367 109.7 57.9196 109.756 58.3531 110.078C58.6781 110.078 58.7308 109.809 58.7308 109.592L58.5698 107.812V102.846C58.5172 101.979 58.6781 101.118 58.7865 100.307L58.7896 100.304Z',
              fill: 'white',
            }),
          ],
        }),
        L = (0, x.I)({
          displayName: 'Graphql',
          viewBox: '0 0 90 90',
          path: [
            (0, n.jsx)('path', {
              d: 'M9.6957 66.2309L12.9302 68.0984L48.964 5.68794L45.7295 3.82044L9.6957 66.2309Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M81.0225 61.245H8.955V64.98H81.0225V61.245Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M10.381 63.3433L46.4283 84.1558L48.2958 80.9213L12.2485 60.1088L10.381 63.3433Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M41.6953 9.10046L77.7425 29.913L79.61 26.6785L43.5628 5.86595L41.6953 9.10046Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M10.391 26.6642L12.2585 29.8987L48.3058 9.08618L46.4383 5.85167L10.391 26.6642Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M41.0441 5.68867L77.0779 68.0991L80.3124 66.2316L44.2787 3.82117L41.0441 5.68867Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M15.5475 24.1875H11.8125V65.8125H15.5475V24.1875Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M78.1875 24.1875H74.4525V65.8125H78.1875V24.1875Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M44.1612 79.7494L45.7924 82.5747L77.1438 64.4735L75.5125 61.6481L44.1612 79.7494Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M83.1375 67.0275C80.9775 70.785 76.1625 72.0675 72.405 69.9075C68.6475 67.7475 67.365 62.9325 69.525 59.175C71.685 55.4175 76.5 54.135 80.2575 56.295C84.0375 58.4775 85.32 63.27 83.1375 67.0275Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M20.4525 30.825C18.2925 34.5825 13.4775 35.865 9.72 33.705C5.9625 31.545 4.68 26.73 6.84 22.9725C9 19.215 13.815 17.9325 17.5725 20.0925C21.33 22.275 22.6125 27.0675 20.4525 30.825Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M6.8625 67.0275C4.7025 63.27 5.985 58.4775 9.7425 56.295C13.5 54.135 18.2925 55.4175 20.475 59.175C22.635 62.9325 21.3525 67.725 17.595 69.9075C13.815 72.0675 9.0225 70.785 6.8625 67.0275Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M69.5475 30.825C67.3875 27.0675 68.67 22.275 72.4275 20.0925C76.185 17.9325 80.9775 19.215 83.16 22.9725C85.32 26.73 84.0375 31.5225 80.28 33.705C76.5225 35.865 71.7075 34.5825 69.5475 30.825Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M45 89.055C40.6575 89.055 37.1475 85.545 37.1475 81.2025C37.1475 76.86 40.6575 73.35 45 73.35C49.3425 73.35 52.8525 76.86 52.8525 81.2025C52.8525 85.5225 49.3425 89.055 45 89.055Z',
              fill: 'white',
            }),
            (0, n.jsx)('path', {
              d: 'M45 16.6499C40.6575 16.6499 37.1475 13.1399 37.1475 8.79745C37.1475 4.45495 40.6575 0.944946 45 0.944946C49.3425 0.944946 52.8525 4.45495 52.8525 8.79745C52.8525 13.1399 49.3425 16.6499 45 16.6499Z',
              fill: 'white',
            }),
          ],
        }),
        j = (0, x.I)({
          displayName: 'React',
          viewBox: '0 0 91 81',
          path: (0, n.jsx)('path', {
            d: 'M45.5 32.3896C44.4349 32.3896 43.3803 32.5994 42.3963 33.0069C41.4123 33.4145 40.5182 34.0119 39.7651 34.7651C39.012 35.5182 38.4146 36.4123 38.007 37.3963C37.5994 38.3802 37.3896 39.4349 37.3896 40.5C37.3896 41.565 37.5994 42.6197 38.007 43.6037C38.4146 44.5877 39.012 45.4817 39.7651 46.2349C40.5182 46.988 41.4123 47.5854 42.3963 47.993C43.3803 48.4005 44.4349 48.6103 45.5 48.6103C46.5651 48.6103 47.6197 48.4005 48.6037 47.993C49.5877 47.5854 50.4818 46.988 51.2349 46.2349C51.988 45.4817 52.5854 44.5877 52.993 43.6037C53.4006 42.6197 53.6104 41.565 53.6104 40.5C53.6104 39.4349 53.4006 38.3802 52.993 37.3963C52.5854 36.4123 51.988 35.5182 51.2349 34.7651C50.4818 34.0119 49.5877 33.4145 48.6037 33.0069C47.6197 32.5994 46.5651 32.3896 45.5 32.3896ZM22.7803 56.6335L20.9907 56.1785C7.65158 52.8077 0 47.0861 0 40.4848C0 33.8835 7.65158 28.1619 20.9907 24.7911L22.7803 24.3399L23.2846 26.1144C24.6359 30.7694 26.3643 35.3067 28.4527 39.681L28.8356 40.4886L28.4527 41.2962C26.3608 45.669 24.6323 50.2065 23.2846 54.8628L22.7803 56.6335ZM20.1603 28.9354C10.0214 31.7829 3.79925 36.1395 3.79925 40.4848C3.79925 44.8262 10.0214 49.1829 20.1603 52.0342C21.4003 48.0906 22.8974 44.2325 24.642 40.4848C22.8954 36.7379 21.3982 32.8797 20.1603 28.9354ZM68.2197 56.6335L67.7154 54.8552C66.3654 50.2004 64.6357 45.6642 62.5435 41.2924L62.1606 40.4848L62.5435 39.6772C64.6349 35.3037 66.3646 30.7664 67.7154 26.1106L68.2197 24.3361L70.0131 24.7873C83.3484 28.1581 91 33.8797 91 40.4848C91 47.0899 83.3484 52.8077 70.0131 56.1785L68.2197 56.6335ZM66.358 40.4848C68.178 44.4243 69.6833 48.2956 70.8397 52.0342C80.9824 49.1829 87.2008 44.8262 87.2008 40.4848C87.2008 36.1395 80.9786 31.7867 70.8397 28.9354C69.6014 32.8796 68.1042 36.7377 66.358 40.4848ZM20.1338 28.9164L19.6295 27.1457C15.8795 13.928 17.017 4.45637 22.75 1.15004C28.373 -2.09562 37.401 1.73775 46.8612 11.4482L48.1504 12.7715L46.8612 14.0948C43.4997 17.5892 40.4284 21.3516 37.6778 25.3447L37.1659 26.0765L36.2749 26.1523C31.4364 26.5337 26.6368 27.3072 21.9234 28.4652L20.1338 28.9164ZM27.3228 3.77767C26.3066 3.77767 25.408 3.99758 24.6496 4.43362C20.8807 6.60625 20.2134 14.1592 22.8107 24.3512C26.8512 23.4524 30.946 22.8178 35.0691 22.4516C37.4481 19.069 40.0472 15.8467 42.8496 12.8056C36.9346 7.04608 31.3343 3.77767 27.3228 3.77767ZM63.681 80.9836C63.6772 80.9836 63.6772 80.9836 63.681 80.9836C58.2779 80.9836 51.3392 76.9151 44.1388 69.5214L42.8496 68.1981L44.1388 66.8748C47.4994 63.3792 50.5694 59.6156 53.3184 55.6211L53.8303 54.8893L54.7175 54.8135C59.5586 54.4342 64.3607 53.6619 69.0766 52.5044L70.8663 52.0532L71.3743 53.8277C75.1167 67.0378 73.983 76.5132 68.25 79.8157C66.8575 80.6031 65.2806 81.0061 63.681 80.9836ZM48.1504 68.1639C54.0654 73.9235 59.6657 77.1919 63.6773 77.1919H63.681C64.6934 77.1919 65.5958 76.972 66.3504 76.5359C70.1193 74.3633 70.7904 66.8065 68.1893 56.6145C64.1478 57.5147 60.0516 58.1492 55.9271 58.5142C53.551 61.8991 50.9531 65.1228 48.1504 68.1639ZM70.8663 28.9164L69.0766 28.4652C64.3613 27.3039 59.559 26.5303 54.7175 26.1523L53.8303 26.0765L53.3184 25.3447C50.5708 21.3504 47.5007 17.5878 44.1388 14.0948L42.8496 12.7715L44.1388 11.4482C53.5952 1.74154 62.6194 -2.09183 68.25 1.15004C73.983 4.45637 75.1205 13.928 71.3743 27.1419L70.8663 28.9164ZM55.9271 22.4516C60.2572 22.846 64.3711 23.4867 68.1893 24.3512C70.7904 14.1592 70.1193 6.60625 66.3504 4.43362C62.6042 2.26858 55.5631 5.58629 48.1504 12.8056C50.9515 15.8468 53.5493 19.0691 55.9271 22.4516ZM27.3228 80.9836C25.7219 81.0068 24.1437 80.6038 22.75 79.8157C17.017 76.5132 15.8795 67.0416 19.6295 53.8277L20.13 52.0532L21.9196 52.5044C26.299 53.6077 31.1296 54.385 36.2711 54.8135L37.1621 54.8893L37.6702 55.6211C40.4213 59.615 43.4925 63.3787 46.8536 66.8748L48.1428 68.1981L46.8536 69.5214C39.657 76.9151 32.7183 80.9836 27.3228 80.9836ZM22.8107 56.6145C20.2096 66.8065 20.8807 74.3633 24.6496 76.5359C28.392 78.6707 35.4293 75.3795 42.8496 68.1639C40.0483 65.1206 37.4493 61.8971 35.0691 58.5142C30.9458 58.1495 26.8509 57.515 22.8107 56.6145ZM45.5 58.9957C42.3795 58.9957 39.1717 58.8592 35.9602 58.5938L35.0691 58.518L34.5573 57.7862C32.7407 55.176 31.033 52.4917 29.4385 49.7402C27.8487 46.9866 26.3738 44.1682 25.0174 41.2924L24.6383 40.4848L25.0174 39.6772C26.3736 36.8013 27.8485 33.9829 29.4385 31.2293C31.0083 28.5145 32.7335 25.8072 34.5573 23.1834L35.0691 22.4516L35.9602 22.3758C42.3099 21.8374 48.6939 21.8374 55.0436 22.3758L55.9309 22.4516L56.439 23.1834C60.0758 28.4048 63.2682 33.922 65.9826 39.6772L66.3655 40.4848L65.9826 41.2924C63.2747 47.0509 60.082 52.5687 56.439 57.7862L55.9309 58.518L55.0436 58.5938C51.8321 58.8592 48.6205 58.9957 45.5 58.9957ZM37.1697 54.8855C42.7814 55.3064 48.2186 55.3064 53.8341 54.8855C56.9691 50.3024 59.7526 45.4884 62.1606 40.4848C59.7569 35.4782 56.9719 30.6638 53.8303 26.084C48.2847 25.6632 42.7153 25.6632 37.1697 26.084C34.0267 30.6629 31.2417 35.4774 28.8394 40.4848C31.25 45.4877 34.0347 50.3017 37.1697 54.8855Z',
            fill: 'white',
          }),
        }),
        f = () => {
          let e = (0, o.useRouter)(),
            [i] = (0, s.ac)('(min-width: 48em)'),
            t = (t) => {
              i &&
                t &&
                (t > 0 && e.push('/#Services', void 0, { scroll: !1 }),
                t < 0 && e.push('/#Contact', void 0, { scroll: !1 }))
            }
          return (0, n.jsxs)(s.W2, {
            id: 'Technologies',
            direction: 'column',
            bgGradient: 'linear(to-l,'
              .concat(s.O9.red.lightBackground, ', ')
              .concat(s.O9.red.darkBackground, ')'),
            changePage: t,
            paddingTop: 0,
            children: [
              (0, n.jsx)(s.X6, {
                marginTop: ['74px', '74px', '0px'],
                variant: 'title',
                marginBottom: ['30px', '30px', '40px'],
                fontSize: ['40px', '40px', '50px'],
                lineHeight: ['48px', '48px', '51px'],
                children: 'Technologies',
              }),
              (0, n.jsx)(s.xv, {
                variant: 'subtitle',
                width: ['281px', '281px', '540px'],
                textAlign: 'center',
                marginBottom: ['44px', '44px', '43px'],
                children:
                  'We make your ideas for web services a reality with a incredible Tech Stack',
              }),
              (0, n.jsx)(u(), {
                href: '#Contact',
                scroll: !1,
                title: 'Contact',
                children: (0, n.jsx)(s._i, {}),
              }),
              (0, n.jsxs)(s.Kq, {
                spacing: ['44px', '44px', '30px'],
                direction: ['column', 'column', 'row', 'row'],
                marginBottom: ['94px', '94px', '0px'],
                children: [
                  (0, n.jsx)(s.Zb, {
                    display: 'flex',
                    children: (0, n.jsxs)(s.kC, {
                      direction: ['row', 'row', 'column'],
                      align: 'center',
                      width: '100%',
                      height: '100%',
                      marginTop: ['auto', 'auto', '70px'],
                      marginBottom: ['auto', 'auto', '60px'],
                      justify: 'space-between',
                      marginX: ['40px', '40px', 'auto'],
                      children: [
                        (0, n.jsx)(m, {
                          width: ['61px', '61px', '105px'],
                          height: ['40px', '40px', '69px'],
                        }),
                        (0, n.jsx)(s.kC, { children: 'Typescript' }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(s.Zb, {
                    display: 'flex',
                    children: (0, n.jsxs)(s.kC, {
                      align: 'center',
                      direction: ['row', 'row', 'column'],
                      width: '100%',
                      height: '100%',
                      marginTop: ['auto', 'auto', '44px'],
                      marginBottom: ['auto', 'auto', '60px'],
                      justify: 'space-between',
                      marginRight: ['45px', '45px', 'auto'],
                      marginLeft: ['40px', '40px', 'auto'],
                      children: [
                        (0, n.jsx)(g, {
                          width: ['70px', '70px', '122px'],
                          height: ['70px', '70px', '122px'],
                        }),
                        (0, n.jsx)(s.kC, { children: 'MongoDB' }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(s.Zb, {
                    display: ['flex', 'flex', 'none', 'flex'],
                    children: (0, n.jsxs)(s.kC, {
                      align: 'center',
                      direction: ['row', 'row', 'column'],
                      width: '100%',
                      height: '100%',
                      marginTop: ['auto', 'auto', '60px'],
                      marginBottom: ['auto', 'auto', '60px'],
                      justify: 'space-between',
                      marginRight: ['53px', '53px', 'auto'],
                      marginLeft: ['50px', '50px', 'auto'],
                      children: [
                        (0, n.jsx)(L, {
                          width: ['45.5px', '45.5', '90px'],
                          height: ['51px', '51px', '90px'],
                        }),
                        (0, n.jsx)(s.kC, { children: 'GraphQL' }),
                      ],
                    }),
                  }),
                  (0, n.jsx)(s.Zb, {
                    display: ['flex', 'flex', 'none', 'none', 'flex'],
                    children: (0, n.jsxs)(s.kC, {
                      align: 'center',
                      direction: ['row', 'row', 'column'],
                      width: '100%',
                      height: '100%',
                      marginTop: ['auto', 'auto', '65px'],
                      marginBottom: ['auto', 'auto', '60px'],
                      justify: 'space-between',
                      marginRight: ['75px', '75px', 'auto'],
                      marginLeft: ['46px', '46px', 'auto'],
                      children: [
                        (0, n.jsx)(j, {
                          width: ['53px', '53px', '91px'],
                          height: ['47px', '47px', '81px'],
                        }),
                        (0, n.jsx)(s.kC, { children: 'React' }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        },
        w = () =>
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(r(), {
                children: [
                  (0, n.jsx)('title', { children: 'λexpress' }),
                  (0, n.jsx)('link', {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/Express.png',
                  }),
                ],
              }),
              (0, n.jsx)(d, {}),
              (0, n.jsx)(C, {}),
              (0, n.jsx)(f, {}),
              (0, n.jsx)(l, {}),
            ],
          })
      var v = w
    },
    7729: function (e, i, t) {
      e.exports = t(7016)
    },
    5632: function (e, i, t) {
      e.exports = t(2203)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 7314))
    }),
      (_N_E = e.O())
  },
])
