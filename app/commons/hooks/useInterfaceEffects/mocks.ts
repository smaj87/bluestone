import { InterfaceEffectInterface } from 'commons/hooks/useInterfaceEffects/types';

export const bannerTopData: InterfaceEffectInterface[] = [
  {
    id: 'bannerTop',
    type: 'bannerTop',
    params: {
      placement: 'mails',
      subtype: 'html',
      template: {
        content: {
          uk: '',
          pl: btoa(
            encodeURIComponent(`
              <div class="cc-content">
                <figure class="cc-image --cc-image-md"><!-- wartość 'md' z das ('sm', 'md', 'lg') -->
                  <img src="https://ocdn.eu/lps/8033433/creative/000/000649/000649947/clock_1_300x300.png" alt="">
                </figure>
                <div class="cc-details">
                  <div class="cc-description">
                    <div class="cc-wysiwyg --cc-wysiwyg-md"><!-- wartość 'md' z das ('sm', 'md', 'lg') -->
                        <h3>Ups! Ktoś zapomniał przedłużyć płatny pakiet Onet Poczty.</h3>
                        <div class="cc-wysiwyg__content">Ale spokojnie, jeszcze nie jest za późno. Zobacz, co dla Ciebie przygotowaliśmy.</div>
                    </div>
                    <div class="cc-actions" role="group">
                      <button
                        type="button"
                        title=""
                        class="cta-embedded cta--primary cta--lg"
                        aria-label=""
                        data-action="redirect"
                        data-params="${encodeURIComponent(JSON.stringify({ redirectUrl: 'https://onet.pl' }))}"
                      ><span class="cta-embedded__label">Sprawdź plany</span></button>
                    </div>
                    <div class="cc-additional">
                      Ale spokojnie, jeszcze nie jest za późno. Zobacz, co dla Ciebie <a href="https://poczta.onet.pl" title="">przygotowaliśmy</a>.
                    </div>
                  </div>
                </div>
              </div>`),
          ),
        },
      },
      meta: {
        actioncount:
          'https://api.poczta.onet.pl/webmail/csr/eclk/adbeta,-1,649947/LU=202410221715165174201789/IP=202503181527016122512847/IV=202503181527016122512847/IR=202503181527018631757011/GCTX=eJx9j09PxCAQxb8LVzwwbCmtt67ZQ5OaGN2Y6IVAy7Yo_ZPCZhON391ht_HoBd5v3huY-Sb1E7knnHHBdlCA4JJBDpwL4EUmyR2pX__324vr4oCZXc4QT16HREkPcfSiRQAEF8bZOG83_LysHcr94VhR7_ohqnHuLJ0nG9Uyt19R09ulsGxWPVnaVO9v6qFqGmz3-iNuv_jzbcAMGOcgQUAuQGacgSxK9KdFb8nVnlCtbuqXs_EuDKiwHGyvtEFHwB-pYNP7RjDKWUuj7svyejJaPR8Pj_ULFcxscZwu7VIkDP664M8vcu9elQ/SLOT=bannerTop/NID=8033433/S=ADBETA/A=L649947%21SLOT.BANNERTOP/SID=bannerTop/AID=31f059859402464ab76fd4d41b036f79/DID=-1/',
        adclick:
          'https://api.poczta.onet.pl/webmail/csr/8033433/clk/adbeta,-1,649947?gctx=eJyFUk2P2jAQ_S31NbC1nTgf3MLCAS0FBJSqvVhO4oSUxEG2A21X-987Diu00lbdiz1v3vN8eOYZpWiClmGQJEH0abdc7x-m6Wo13-7XGzRC0y2a4BF6dAToMqGU1LY7AzVbzNBkTEZosQGGYsqwT2LCaIRJSChlhMZBBMLF9h0fhz6JGBjE8Yf_v386fJQBFB_GyK91YY-g8kM8OMpGGIdv6GjbhuUAyQBr03ZZ3ci743TVBYDpfJ96TV0dLW-7Qnqdkpafu_yPFd7t4uDOtFDSW6Y_vvPHdLkcAjTip71na_pbuQHBlJKIMBIyEgUUkyhOBoU6i7tayxJsXavq3GdNbY5gDYSRFRcZcIy8wdxIlylj2KM496yokmQ4sZdu9_Mvi53HcHZ_ALW6zuKbwzSvLe_gTmeuXwfm28PcjbEQxkE3-tdl2A_L8I_9EMUFzNpIzWtIQEMaROB1NvJJiVkSsySAPwgDkUVhWQRFQDLsh2XkvkAqkTWS552CMKbuFLda5CfX-sTqXoLC2LoVVhZcy4tUPQwLP8Cyyl-g5KeLQZNnlOnu6kpohKp6UbmBfl09rdbfVpCjFaovRW57LTUQvTqp7qrQywiZ38bK9t6wPTdQSTGsQxSElPifN8O0x9Oh47H7hZe_OErtjw&at=1742308021&uuid=3169d08e037e35b5afdb6e24f72e5421&URL=',
        ems_link:
          'https://api.poczta.onet.pl/webmail/csr/8033433/v1/events-processor/emslink?eventData=%257B%2522ems%2522%253A%255B%257B%2522lctx%2522%253A%2522eJxlj8EOgjAMht9l56GgBAJHn8CD92VjjWkyNrIVEjW-u8VFQuLx_9p-bV_CoFVRE4i-PJRSDBE04QIKrehFU3dd3YodTi4QF4z2HiKFiWsWtMvtRcUREuHIQtbCAn7-mTEpcHhH45hQnEEKhx6QYNxNJ4gLRE5WpzX-r1tRHsj0lukjsYihtgZIbyR3skwWldzeocmpIVg-RFRt3Zyq8_Eahifp4vJ1Fqv0_QHSLlv0%2522%257D%255D%252C%2522gctx%2522%253A%2522eJyNV0tzJDUM_i3MdbeCJcuv3AK1B4qwULAUBRQ11ZPphKlMusM8kl0o_juyPnXCgQOX-cZu25KlTw__tRq262k8Pc-H-9XlqoYYJcbV29Ww2-o40m1IraYmgSXLsCn5ditboU2I-ba0vvAwDrpyn6U1KZ8d9_PpYjNM03g4zY_9-3m7G6ebcX0c7x7G6XRcXf66itxscwyUSJFSNSCTLRKSArMe2FFqq4q55mZQikHtk9yo9a0Sm6-NwdFOjDXmPg6h9XliMcE6rl1UVa3tFJH-tRXukCnZqDo0g4ZRw7lYEmPfwJGCCzNo_bDKnE1PKFAo2dIQq41rsttQDA0G6LeRRBkGwIWLHUvNgbHSrKKiKWIMEzac16BDzWaHjgTkBZtjcjR1pMXi2By7CiTZjpHUAJhMfW1MUCDGhEm3iFmS3SImnRvnjpGIzGnszlOEEWAbUZ75NK4okOqWEteoKxw5pb5WSnSb474pYKui3YtK7keLmyPaSG0FvkllgFEoBbsW52w3ga6SuUJFECVmcYRcWIScDmYYkgKLFJjCOKLfIo4zqCZDR4LL4KaqGGHav2aAX8koHovRQcPRgfwjTnBhEE1wvjSfxA7zMHEJ0BnWJZOlIxjZgysWmN5srrO4XvWR7xecChua31PLuKw5px_DjriecU3BhHicdRRH6JkcPJAFQIgmuEGRjVgp-YWhUzGO5ALVBBQQ6CTLTrcfbIxUo7PQUOB7c4vyEXukBXKMjsgJ2e6lScUhOCUBRv0g5v-OUNGZb4aOYgIUljXZ0eRH8IlBWrbLaXZEJIcGA7GxQ2FJN3BribBp8SFjEWMUfG10dDluC9OCKCMnRRiqwabIhoSlAUFIIAaZPyNZxolxUQR5l8AsvYU447EFs-Jp0GZLs3vnkl0IiO_RCvoJyCigZsQNBElexExfqxGJA9t9JBCOsRvoiDHyDO5JpnpAI9nGEBABOnYdKqDLqe3l47LJ3AjzqnREH_K0auOLTKtSLF8XYc985pmOIE9lZ6DpV4RsSNmiPTHyjdad6ui7ogeLBWXkiEgTNhU4RcsvRbNjt29AadB6hZIQUEECShvDItXs1FLCFpvkUo05JDEstanPN8ZiJhOnvu-bWjQGKTGRDUJNCwbH5CiO4G6xaqgUBpN0O1Ke5yGt7OAHrNBxGWdHPw_ZSNHk5uDihBzhAg9yHTdHP1aQ9oJrizQqVr-5wAOa_sgRoSXi2KEhopqHizC85OkiwJfBliDoFJBxcUpdeg8o4s4mL81IjOLthsAIitURy5zf6CE4QAOjAyfQg5CMdBbFUaCsIHNAWTHbxBj82sZWbcnIwDisAuG2vOR-OE9AFG8rnK8IKjtbux40PxUFF3WpIT6bJTn1jDd7UDx4_mVGV2H1UpMJUo7A35lBG01IfVMF9AaoOHrJsyjwkImoWD3-KyLJzKBx5zWQlsYF_Wv1eLMzsiuiXY0hF7Nob9y8JHgHY-ZKBPWapwf4qwbvEtFReKvlPZYFakxWa5ltUk3jqQCNTkG3FMz6hZCJ4DQGjaKTEcGooYq8bJZVYmBtTYUcwQ3LzFpgkR3RF0bv_bS19U0Zyat4jrdMV9CgE3yoli1L8vRcCpeiPhYvz1zcsCBjkJfu3gwdvV6iHkfPCJG9KVJ6mIzCS6Lxy4DoSrglcZjsjARQ3AMZrazYGYw-xxvXl0aVPFTgOwarTZoqA6J5zSg4TftSr__wl_ZCIG1qXvPS6re3q81hfj6Oh_V-mO7Ow92oL60f33_9_tuf3q9eP07DQ_8wfNzNx39NP42H426e9AtdlIt--s10Wl2S4jwd9Sm2fjwfHufjqE-y_Dr5NE7b-aBzapY-e55Oh09rew6W5iZ7mT3OOv3dtU5tx6edvvIehul8O9yczofxoJ_O0_00P0-v30-fHruu2_F4j_fh-NSFnnYP4_E0PDyqfloLY9Dqo4rejfPaZXU5s5phq3t2x_XDvNnt9aTbYX8cbWZ6HF6G9-MnfdFu7a35xbsPV7pnv7v7_aTbtqMOZn3yrh_nmz9Pg47wZ62fNodh6t-vr375ef3l1fV198F-vhn263M3qVlBGwmhoNlEGyTS7rTXbirGh_m4OGO_m84f-9nqtPXTbnx-2ZtC1DSRtP3WXpM15TJ6jMP4x1lt8F_r-iOuJP3Tqafv6PWw0ef0qd9uk8IbDjdvTsNda_Yb3lx9_-HdN1_98CaFTdffH966aXWZ6HWsd93OD-pnndqdjEHbzWgWscuq5p0v4NXnC4dgh8euI8ULzU8XWscuemj8j1v-_Q8ySmFW%2522%257D',
        viewability:
          'https://api.poczta.onet.pl/webmail/csr/8033433/v1/events-processor/av?eventData=%7B%22gctx%22%3A%22eJyNV0tzJDUM_i3MdbeCJcuv3AK1B4qwULAUBRQ11ZPphKlMusM8kl0o_juyPnXCgQOX-cZu25KlTw__tRq262k8Pc-H-9XlqoYYJcbV29Ww2-o40m1IraYmgSXLsCn5ditboU2I-ba0vvAwDrpyn6U1KZ8d9_PpYjNM03g4zY_9-3m7G6ebcX0c7x7G6XRcXf66itxscwyUSJFSNSCTLRKSArMe2FFqq4q55mZQikHtk9yo9a0Sm6-NwdFOjDXmPg6h9XliMcE6rl1UVa3tFJH-tRXukCnZqDo0g4ZRw7lYEmPfwJGCCzNo_bDKnE1PKFAo2dIQq41rsttQDA0G6LeRRBkGwIWLHUvNgbHSrKKiKWIMEzac16BDzWaHjgTkBZtjcjR1pMXi2By7CiTZjpHUAJhMfW1MUCDGhEm3iFmS3SImnRvnjpGIzGnszlOEEWAbUZ75NK4okOqWEteoKxw5pb5WSnSb474pYKui3YtK7keLmyPaSG0FvkllgFEoBbsW52w3ga6SuUJFECVmcYRcWIScDmYYkgKLFJjCOKLfIo4zqCZDR4LL4KaqGGHav2aAX8koHovRQcPRgfwjTnBhEE1wvjSfxA7zMHEJ0BnWJZOlIxjZgysWmN5srrO4XvWR7xecChua31PLuKw5px_DjriecU3BhHicdRRH6JkcPJAFQIgmuEGRjVgp-YWhUzGO5ALVBBQQ6CTLTrcfbIxUo7PQUOB7c4vyEXukBXKMjsgJ2e6lScUhOCUBRv0g5v-OUNGZb4aOYgIUljXZ0eRH8IlBWrbLaXZEJIcGA7GxQ2FJN3BribBp8SFjEWMUfG10dDluC9OCKCMnRRiqwabIhoSlAUFIIAaZPyNZxolxUQR5l8AsvYU447EFs-Jp0GZLs3vnkl0IiO_RCvoJyCigZsQNBElexExfqxGJA9t9JBCOsRvoiDHyDO5JpnpAI9nGEBABOnYdKqDLqe3l47LJ3AjzqnREH_K0auOLTKtSLF8XYc985pmOIE9lZ6DpV4RsSNmiPTHyjdad6ui7ogeLBWXkiEgTNhU4RcsvRbNjt29AadB6hZIQUEECShvDItXs1FLCFpvkUo05JDEstanPN8ZiJhOnvu-bWjQGKTGRDUJNCwbH5CiO4G6xaqgUBpN0O1Ke5yGt7OAHrNBxGWdHPw_ZSNHk5uDihBzhAg9yHTdHP1aQ9oJrizQqVr-5wAOa_sgRoSXi2KEhopqHizC85OkiwJfBliDoFJBxcUpdeg8o4s4mL81IjOLthsAIitURy5zf6CE4QAOjAyfQg5CMdBbFUaCsIHNAWTHbxBj82sZWbcnIwDisAuG2vOR-OE9AFG8rnK8IKjtbux40PxUFF3WpIT6bJTn1jDd7UDx4_mVGV2H1UpMJUo7A35lBG01IfVMF9AaoOHrJsyjwkImoWD3-KyLJzKBx5zWQlsYF_Wv1eLMzsiuiXY0hF7Nob9y8JHgHY-ZKBPWapwf4qwbvEtFReKvlPZYFakxWa5ltUk3jqQCNTkG3FMz6hZCJ4DQGjaKTEcGooYq8bJZVYmBtTYUcwQ3LzFpgkR3RF0bv_bS19U0Zyat4jrdMV9CgE3yoli1L8vRcCpeiPhYvz1zcsCBjkJfu3gwdvV6iHkfPCJG9KVJ6mIzCS6Lxy4DoSrglcZjsjARQ3AMZrazYGYw-xxvXl0aVPFTgOwarTZoqA6J5zSg4TftSr__wl_ZCIG1qXvPS6re3q81hfj6Oh_V-mO7Ow92oL60f33_9_tuf3q9eP07DQ_8wfNzNx39NP42H426e9AtdlIt--s10Wl2S4jwd9Sm2fjwfHufjqE-y_Dr5NE7b-aBzapY-e55Oh09rew6W5iZ7mT3OOv3dtU5tx6edvvIehul8O9yczofxoJ_O0_00P0-v30-fHruu2_F4j_fh-NSFnnYP4_E0PDyqfloLY9Dqo4rejfPaZXU5s5phq3t2x_XDvNnt9aTbYX8cbWZ6HF6G9-MnfdFu7a35xbsPV7pnv7v7_aTbtqMOZn3yrh_nmz9Pg47wZ62fNodh6t-vr375ef3l1fV198F-vhn263M3qVlBGwmhoNlEGyTS7rTXbirGh_m4OGO_m84f-9nqtPXTbnx-2ZtC1DSRtP3WXpM15TJ6jMP4x1lt8F_r-iOuJP3Tqafv6PWw0ef0qd9uk8IbDjdvTsNda_Yb3lx9_-HdN1_98CaFTdffH966aXWZ6HWsd93OD-pnndqdjEHbzWgWscuq5p0v4NXnC4dgh8euI8ULzU8XWscuemj8j1v-_Q8ySmFW%22%2C%22ems%22%3A%5B%7B%22lctx%22%3A%22eJxlj8EOgjAMht9l56GgBAJHn8CD92VjjWkyNrIVEjW-u8VFQuLx_9p-bV_CoFVRE4i-PJRSDBE04QIKrehFU3dd3YodTi4QF4z2HiKFiWsWtMvtRcUREuHIQtbCAn7-mTEpcHhH45hQnEEKhx6QYNxNJ4gLRE5WpzX-r1tRHsj0lukjsYihtgZIbyR3skwWldzeocmpIVg-RFRt3Zyq8_Eahifp4vJ1Fqv0_QHSLlv0%22%7D%5D%7D',
      },
      adserver_meta: {
        async_render: false,
        async_viewability: false,
        enable_conversion_tracking: true,
        mailing_meta: null,
        server: 'das',
        set_slot_size: true,
        viewability: 1,
        viewability_cfg: {
          percent: 50,
          time: 1000,
        },
      },
    },
  },
];

export const modalData: InterfaceEffectInterface[] = [
  {
    id: 'modal',
    type: 'modal',
    params: {
      subtype: 'html',
      template: {
        content: {
          uk: '',
          pl: btoa(
            encodeURIComponent(`
              <div class="cc-content">
                <figure class="cc-image --cc-image-md"><!-- wartość 'md' z das ('sm', 'md', 'lg') -->
                  <img src="https://ocdn.eu/lps/8033433/creative/000/000649/000649947/clock_1_300x300.png" alt="">
                </figure>
                <div class="cc-details">
                  <div class="cc-description">
                    <div class="cc-wysiwyg --cc-wysiwyg-md"><!-- wartość 'md' z das ('sm', 'md', 'lg') -->
                        <h3>Ups! Ktoś zapomniał przedłużyć płatny pakiet Onet Poczty.</h3>
                        <div class="cc-wysiwyg__content">Ale spokojnie, jeszcze nie jest za późno. Zobacz, co dla Ciebie przygotowaliśmy.</div>
                    </div>
                    <div class="cc-actions" role="group">
                      <button
                        type="button"
                        title=""
                        class="cta-embedded cta--primary cta--lg"
                        aria-label=""
                        data-action="redirect"
                        data-params="${encodeURIComponent(JSON.stringify({ redirectUrl: 'https://onet.pl' }))}"
                      ><span class="cta-embedded__label">Sprawdź plany</span></button>
                    </div>
                    <div class="cc-additional">
                      Ale spokojnie, jeszcze nie jest za późno. Zobacz, co dla Ciebie <a href="https://poczta.onet.pl" title="">przygotowaliśmy</a>.
                    </div>
                  </div>
                </div>
              </div>`),
          ),
        },
      },
      meta: {
        actioncount:
          'https://api.poczta.onet.pl/webmail/csr/eclk/adbeta,-1,649947/LU=202410221715165174201789/IP=202503181527016122512847/IV=202503181527016122512847/IR=202503181527018631757011/GCTX=eJx9j09PxCAQxb8LVzwwbCmtt67ZQ5OaGN2Y6IVAy7Yo_ZPCZhON391ht_HoBd5v3huY-Sb1E7knnHHBdlCA4JJBDpwL4EUmyR2pX__324vr4oCZXc4QT16HREkPcfSiRQAEF8bZOG83_LysHcr94VhR7_ohqnHuLJ0nG9Uyt19R09ulsGxWPVnaVO9v6qFqGmz3-iNuv_jzbcAMGOcgQUAuQGacgSxK9KdFb8nVnlCtbuqXs_EuDKiwHGyvtEFHwB-pYNP7RjDKWUuj7svyejJaPR8Pj_ULFcxscZwu7VIkDP664M8vcu9elQ/SLOT=bannerTop/NID=8033433/S=ADBETA/A=L649947%21SLOT.BANNERTOP/SID=bannerTop/AID=31f059859402464ab76fd4d41b036f79/DID=-1/',
        adclick:
          'https://api.poczta.onet.pl/webmail/csr/8033433/clk/adbeta,-1,649947?gctx=eJyFUk2P2jAQ_S31NbC1nTgf3MLCAS0FBJSqvVhO4oSUxEG2A21X-987Diu00lbdiz1v3vN8eOYZpWiClmGQJEH0abdc7x-m6Wo13-7XGzRC0y2a4BF6dAToMqGU1LY7AzVbzNBkTEZosQGGYsqwT2LCaIRJSChlhMZBBMLF9h0fhz6JGBjE8Yf_v386fJQBFB_GyK91YY-g8kM8OMpGGIdv6GjbhuUAyQBr03ZZ3ci743TVBYDpfJ96TV0dLW-7Qnqdkpafu_yPFd7t4uDOtFDSW6Y_vvPHdLkcAjTip71na_pbuQHBlJKIMBIyEgUUkyhOBoU6i7tayxJsXavq3GdNbY5gDYSRFRcZcIy8wdxIlylj2KM496yokmQ4sZdu9_Mvi53HcHZ_ALW6zuKbwzSvLe_gTmeuXwfm28PcjbEQxkE3-tdl2A_L8I_9EMUFzNpIzWtIQEMaROB1NvJJiVkSsySAPwgDkUVhWQRFQDLsh2XkvkAqkTWS552CMKbuFLda5CfX-sTqXoLC2LoVVhZcy4tUPQwLP8Cyyl-g5KeLQZNnlOnu6kpohKp6UbmBfl09rdbfVpCjFaovRW57LTUQvTqp7qrQywiZ38bK9t6wPTdQSTGsQxSElPifN8O0x9Oh47H7hZe_OErtjw&at=1742308021&uuid=3169d08e037e35b5afdb6e24f72e5421&URL=',
        ems_link:
          'https://api.poczta.onet.pl/webmail/csr/8033433/v1/events-processor/emslink?eventData=%257B%2522ems%2522%253A%255B%257B%2522lctx%2522%253A%2522eJxlj8EOgjAMht9l56GgBAJHn8CD92VjjWkyNrIVEjW-u8VFQuLx_9p-bV_CoFVRE4i-PJRSDBE04QIKrehFU3dd3YodTi4QF4z2HiKFiWsWtMvtRcUREuHIQtbCAn7-mTEpcHhH45hQnEEKhx6QYNxNJ4gLRE5WpzX-r1tRHsj0lukjsYihtgZIbyR3skwWldzeocmpIVg-RFRt3Zyq8_Eahifp4vJ1Fqv0_QHSLlv0%2522%257D%255D%252C%2522gctx%2522%253A%2522eJyNV0tzJDUM_i3MdbeCJcuv3AK1B4qwULAUBRQ11ZPphKlMusM8kl0o_juyPnXCgQOX-cZu25KlTw__tRq262k8Pc-H-9XlqoYYJcbV29Ww2-o40m1IraYmgSXLsCn5ditboU2I-ba0vvAwDrpyn6U1KZ8d9_PpYjNM03g4zY_9-3m7G6ebcX0c7x7G6XRcXf66itxscwyUSJFSNSCTLRKSArMe2FFqq4q55mZQikHtk9yo9a0Sm6-NwdFOjDXmPg6h9XliMcE6rl1UVa3tFJH-tRXukCnZqDo0g4ZRw7lYEmPfwJGCCzNo_bDKnE1PKFAo2dIQq41rsttQDA0G6LeRRBkGwIWLHUvNgbHSrKKiKWIMEzac16BDzWaHjgTkBZtjcjR1pMXi2By7CiTZjpHUAJhMfW1MUCDGhEm3iFmS3SImnRvnjpGIzGnszlOEEWAbUZ75NK4okOqWEteoKxw5pb5WSnSb474pYKui3YtK7keLmyPaSG0FvkllgFEoBbsW52w3ga6SuUJFECVmcYRcWIScDmYYkgKLFJjCOKLfIo4zqCZDR4LL4KaqGGHav2aAX8koHovRQcPRgfwjTnBhEE1wvjSfxA7zMHEJ0BnWJZOlIxjZgysWmN5srrO4XvWR7xecChua31PLuKw5px_DjriecU3BhHicdRRH6JkcPJAFQIgmuEGRjVgp-YWhUzGO5ALVBBQQ6CTLTrcfbIxUo7PQUOB7c4vyEXukBXKMjsgJ2e6lScUhOCUBRv0g5v-OUNGZb4aOYgIUljXZ0eRH8IlBWrbLaXZEJIcGA7GxQ2FJN3BribBp8SFjEWMUfG10dDluC9OCKCMnRRiqwabIhoSlAUFIIAaZPyNZxolxUQR5l8AsvYU447EFs-Jp0GZLs3vnkl0IiO_RCvoJyCigZsQNBElexExfqxGJA9t9JBCOsRvoiDHyDO5JpnpAI9nGEBABOnYdKqDLqe3l47LJ3AjzqnREH_K0auOLTKtSLF8XYc985pmOIE9lZ6DpV4RsSNmiPTHyjdad6ui7ogeLBWXkiEgTNhU4RcsvRbNjt29AadB6hZIQUEECShvDItXs1FLCFpvkUo05JDEstanPN8ZiJhOnvu-bWjQGKTGRDUJNCwbH5CiO4G6xaqgUBpN0O1Ke5yGt7OAHrNBxGWdHPw_ZSNHk5uDihBzhAg9yHTdHP1aQ9oJrizQqVr-5wAOa_sgRoSXi2KEhopqHizC85OkiwJfBliDoFJBxcUpdeg8o4s4mL81IjOLthsAIitURy5zf6CE4QAOjAyfQg5CMdBbFUaCsIHNAWTHbxBj82sZWbcnIwDisAuG2vOR-OE9AFG8rnK8IKjtbux40PxUFF3WpIT6bJTn1jDd7UDx4_mVGV2H1UpMJUo7A35lBG01IfVMF9AaoOHrJsyjwkImoWD3-KyLJzKBx5zWQlsYF_Wv1eLMzsiuiXY0hF7Nob9y8JHgHY-ZKBPWapwf4qwbvEtFReKvlPZYFakxWa5ltUk3jqQCNTkG3FMz6hZCJ4DQGjaKTEcGooYq8bJZVYmBtTYUcwQ3LzFpgkR3RF0bv_bS19U0Zyat4jrdMV9CgE3yoli1L8vRcCpeiPhYvz1zcsCBjkJfu3gwdvV6iHkfPCJG9KVJ6mIzCS6Lxy4DoSrglcZjsjARQ3AMZrazYGYw-xxvXl0aVPFTgOwarTZoqA6J5zSg4TftSr__wl_ZCIG1qXvPS6re3q81hfj6Oh_V-mO7Ow92oL60f33_9_tuf3q9eP07DQ_8wfNzNx39NP42H426e9AtdlIt--s10Wl2S4jwd9Sm2fjwfHufjqE-y_Dr5NE7b-aBzapY-e55Oh09rew6W5iZ7mT3OOv3dtU5tx6edvvIehul8O9yczofxoJ_O0_00P0-v30-fHruu2_F4j_fh-NSFnnYP4_E0PDyqfloLY9Dqo4rejfPaZXU5s5phq3t2x_XDvNnt9aTbYX8cbWZ6HF6G9-MnfdFu7a35xbsPV7pnv7v7_aTbtqMOZn3yrh_nmz9Pg47wZ62fNodh6t-vr375ef3l1fV198F-vhn263M3qVlBGwmhoNlEGyTS7rTXbirGh_m4OGO_m84f-9nqtPXTbnx-2ZtC1DSRtP3WXpM15TJ6jMP4x1lt8F_r-iOuJP3Tqafv6PWw0ef0qd9uk8IbDjdvTsNda_Yb3lx9_-HdN1_98CaFTdffH966aXWZ6HWsd93OD-pnndqdjEHbzWgWscuq5p0v4NXnC4dgh8euI8ULzU8XWscuemj8j1v-_Q8ySmFW%2522%257D',
        viewability:
          'https://api.poczta.onet.pl/webmail/csr/8033433/v1/events-processor/av?eventData=%7B%22gctx%22%3A%22eJyNV0tzJDUM_i3MdbeCJcuv3AK1B4qwULAUBRQ11ZPphKlMusM8kl0o_juyPnXCgQOX-cZu25KlTw__tRq262k8Pc-H-9XlqoYYJcbV29Ww2-o40m1IraYmgSXLsCn5ditboU2I-ba0vvAwDrpyn6U1KZ8d9_PpYjNM03g4zY_9-3m7G6ebcX0c7x7G6XRcXf66itxscwyUSJFSNSCTLRKSArMe2FFqq4q55mZQikHtk9yo9a0Sm6-NwdFOjDXmPg6h9XliMcE6rl1UVa3tFJH-tRXukCnZqDo0g4ZRw7lYEmPfwJGCCzNo_bDKnE1PKFAo2dIQq41rsttQDA0G6LeRRBkGwIWLHUvNgbHSrKKiKWIMEzac16BDzWaHjgTkBZtjcjR1pMXi2By7CiTZjpHUAJhMfW1MUCDGhEm3iFmS3SImnRvnjpGIzGnszlOEEWAbUZ75NK4okOqWEteoKxw5pb5WSnSb474pYKui3YtK7keLmyPaSG0FvkllgFEoBbsW52w3ga6SuUJFECVmcYRcWIScDmYYkgKLFJjCOKLfIo4zqCZDR4LL4KaqGGHav2aAX8koHovRQcPRgfwjTnBhEE1wvjSfxA7zMHEJ0BnWJZOlIxjZgysWmN5srrO4XvWR7xecChua31PLuKw5px_DjriecU3BhHicdRRH6JkcPJAFQIgmuEGRjVgp-YWhUzGO5ALVBBQQ6CTLTrcfbIxUo7PQUOB7c4vyEXukBXKMjsgJ2e6lScUhOCUBRv0g5v-OUNGZb4aOYgIUljXZ0eRH8IlBWrbLaXZEJIcGA7GxQ2FJN3BribBp8SFjEWMUfG10dDluC9OCKCMnRRiqwabIhoSlAUFIIAaZPyNZxolxUQR5l8AsvYU447EFs-Jp0GZLs3vnkl0IiO_RCvoJyCigZsQNBElexExfqxGJA9t9JBCOsRvoiDHyDO5JpnpAI9nGEBABOnYdKqDLqe3l47LJ3AjzqnREH_K0auOLTKtSLF8XYc985pmOIE9lZ6DpV4RsSNmiPTHyjdad6ui7ogeLBWXkiEgTNhU4RcsvRbNjt29AadB6hZIQUEECShvDItXs1FLCFpvkUo05JDEstanPN8ZiJhOnvu-bWjQGKTGRDUJNCwbH5CiO4G6xaqgUBpN0O1Ke5yGt7OAHrNBxGWdHPw_ZSNHk5uDihBzhAg9yHTdHP1aQ9oJrizQqVr-5wAOa_sgRoSXi2KEhopqHizC85OkiwJfBliDoFJBxcUpdeg8o4s4mL81IjOLthsAIitURy5zf6CE4QAOjAyfQg5CMdBbFUaCsIHNAWTHbxBj82sZWbcnIwDisAuG2vOR-OE9AFG8rnK8IKjtbux40PxUFF3WpIT6bJTn1jDd7UDx4_mVGV2H1UpMJUo7A35lBG01IfVMF9AaoOHrJsyjwkImoWD3-KyLJzKBx5zWQlsYF_Wv1eLMzsiuiXY0hF7Nob9y8JHgHY-ZKBPWapwf4qwbvEtFReKvlPZYFakxWa5ltUk3jqQCNTkG3FMz6hZCJ4DQGjaKTEcGooYq8bJZVYmBtTYUcwQ3LzFpgkR3RF0bv_bS19U0Zyat4jrdMV9CgE3yoli1L8vRcCpeiPhYvz1zcsCBjkJfu3gwdvV6iHkfPCJG9KVJ6mIzCS6Lxy4DoSrglcZjsjARQ3AMZrazYGYw-xxvXl0aVPFTgOwarTZoqA6J5zSg4TftSr__wl_ZCIG1qXvPS6re3q81hfj6Oh_V-mO7Ow92oL60f33_9_tuf3q9eP07DQ_8wfNzNx39NP42H426e9AtdlIt--s10Wl2S4jwd9Sm2fjwfHufjqE-y_Dr5NE7b-aBzapY-e55Oh09rew6W5iZ7mT3OOv3dtU5tx6edvvIehul8O9yczofxoJ_O0_00P0-v30-fHruu2_F4j_fh-NSFnnYP4_E0PDyqfloLY9Dqo4rejfPaZXU5s5phq3t2x_XDvNnt9aTbYX8cbWZ6HF6G9-MnfdFu7a35xbsPV7pnv7v7_aTbtqMOZn3yrh_nmz9Pg47wZ62fNodh6t-vr375ef3l1fV198F-vhn263M3qVlBGwmhoNlEGyTS7rTXbirGh_m4OGO_m84f-9nqtPXTbnx-2ZtC1DSRtP3WXpM15TJ6jMP4x1lt8F_r-iOuJP3Tqafv6PWw0ef0qd9uk8IbDjdvTsNda_Yb3lx9_-HdN1_98CaFTdffH966aXWZ6HWsd93OD-pnndqdjEHbzWgWscuq5p0v4NXnC4dgh8euI8ULzU8XWscuemj8j1v-_Q8ySmFW%22%2C%22ems%22%3A%5B%7B%22lctx%22%3A%22eJxlj8EOgjAMht9l56GgBAJHn8CD92VjjWkyNrIVEjW-u8VFQuLx_9p-bV_CoFVRE4i-PJRSDBE04QIKrehFU3dd3YodTi4QF4z2HiKFiWsWtMvtRcUREuHIQtbCAn7-mTEpcHhH45hQnEEKhx6QYNxNJ4gLRE5WpzX-r1tRHsj0lukjsYihtgZIbyR3skwWldzeocmpIVg-RFRt3Zyq8_Eahifp4vJ1Fqv0_QHSLlv0%22%7D%5D%7D',
      },
      adserver_meta: {
        async_render: false,
        async_viewability: false,
        enable_conversion_tracking: true,
        mailing_meta: null,
        server: 'das',
        set_slot_size: true,
        viewability: 1,
        viewability_cfg: {
          percent: 50,
          time: 1000,
        },
      },
    },
  },
];

export const infobarData: InterfaceEffectInterface[] = [
  {
    id: 'infobar',
    type: 'infobar',
    params: {
      subtype: 'html',
      infobarType: 'success',
      // icon: 'trash',
      template: {
        content: {
          uk: '',
          pl: btoa(
            encodeURIComponent(`
              <div class="embedded-detail">
                <div data-plugin="icon" data-params="${encodeURIComponent(JSON.stringify({ icon: 'trash' }))}"></div>
                <div>Opis infobara z <b>pogrubieniem</b> do testow. Opis infobara z <b>pogrubieniem</b> do testow.</div>
              </div>
              <div class="embedded-actions" role="group">
                <button
                  type="button"
                  title=""
                  class="cta-embedded cta--primary cta--sm"
                  aria-label=""
                  data-action="redirect"
                  data-params="${encodeURIComponent(JSON.stringify({ redirectUrl: 'https://onet.pl' }))}"
                ><span class="cta-embedded__label">Sprawdź plany</span></button>
                <button
                  type="button"
                  title=""
                  class="cta-embedded cta--secondary cta--sm"
                  aria-label=""
                  data-action="redirect"
                  data-params="${encodeURIComponent(JSON.stringify({ redirectUrl: 'https://onet.pl' }))}"
                ><span class="cta-embedded__label">Sprawdź plany</span></button>
                <button
                  type="button"
                  title=""
                  class="cta-embedded cta--tertiary cta--sm"
                  aria-label=""
                  data-action="redirect"
                  data-params="${encodeURIComponent(JSON.stringify({ redirectUrl: 'https://onet.pl' }))}"
                ><span class="cta-embedded__label">Pomoc</span></button>
                <button
                  type="button"
                  title=""
                  class="cta-embedded cta--link cta--sm"
                  aria-label=""
                  data-action="redirect"
                  data-params="${encodeURIComponent(JSON.stringify({ redirectUrl: 'https://onet.pl' }))}"
                ><span class="cta-embedded__label">Pomoc</span></button>
              </div>`),
          ),
        },
      },
      meta: {
        actioncount:
          'https://api.poczta.onet.pl/webmail/csr/eclk/adbeta,-1,649947/LU=202410221715165174201789/IP=202503181527016122512847/IV=202503181527016122512847/IR=202503181527018631757011/GCTX=eJx9j09PxCAQxb8LVzwwbCmtt67ZQ5OaGN2Y6IVAy7Yo_ZPCZhON391ht_HoBd5v3huY-Sb1E7knnHHBdlCA4JJBDpwL4EUmyR2pX__324vr4oCZXc4QT16HREkPcfSiRQAEF8bZOG83_LysHcr94VhR7_ohqnHuLJ0nG9Uyt19R09ulsGxWPVnaVO9v6qFqGmz3-iNuv_jzbcAMGOcgQUAuQGacgSxK9KdFb8nVnlCtbuqXs_EuDKiwHGyvtEFHwB-pYNP7RjDKWUuj7svyejJaPR8Pj_ULFcxscZwu7VIkDP664M8vcu9elQ/SLOT=bannerTop/NID=8033433/S=ADBETA/A=L649947%21SLOT.BANNERTOP/SID=bannerTop/AID=31f059859402464ab76fd4d41b036f79/DID=-1/',
        adclick:
          'https://api.poczta.onet.pl/webmail/csr/8033433/clk/adbeta,-1,649947?gctx=eJyFUk2P2jAQ_S31NbC1nTgf3MLCAS0FBJSqvVhO4oSUxEG2A21X-987Diu00lbdiz1v3vN8eOYZpWiClmGQJEH0abdc7x-m6Wo13-7XGzRC0y2a4BF6dAToMqGU1LY7AzVbzNBkTEZosQGGYsqwT2LCaIRJSChlhMZBBMLF9h0fhz6JGBjE8Yf_v386fJQBFB_GyK91YY-g8kM8OMpGGIdv6GjbhuUAyQBr03ZZ3ci743TVBYDpfJ96TV0dLW-7Qnqdkpafu_yPFd7t4uDOtFDSW6Y_vvPHdLkcAjTip71na_pbuQHBlJKIMBIyEgUUkyhOBoU6i7tayxJsXavq3GdNbY5gDYSRFRcZcIy8wdxIlylj2KM496yokmQ4sZdu9_Mvi53HcHZ_ALW6zuKbwzSvLe_gTmeuXwfm28PcjbEQxkE3-tdl2A_L8I_9EMUFzNpIzWtIQEMaROB1NvJJiVkSsySAPwgDkUVhWQRFQDLsh2XkvkAqkTWS552CMKbuFLda5CfX-sTqXoLC2LoVVhZcy4tUPQwLP8Cyyl-g5KeLQZNnlOnu6kpohKp6UbmBfl09rdbfVpCjFaovRW57LTUQvTqp7qrQywiZ38bK9t6wPTdQSTGsQxSElPifN8O0x9Oh47H7hZe_OErtjw&at=1742308021&uuid=3169d08e037e35b5afdb6e24f72e5421&URL=',
        ems_link:
          'https://api.poczta.onet.pl/webmail/csr/8033433/v1/events-processor/emslink?eventData=%257B%2522ems%2522%253A%255B%257B%2522lctx%2522%253A%2522eJxlj8EOgjAMht9l56GgBAJHn8CD92VjjWkyNrIVEjW-u8VFQuLx_9p-bV_CoFVRE4i-PJRSDBE04QIKrehFU3dd3YodTi4QF4z2HiKFiWsWtMvtRcUREuHIQtbCAn7-mTEpcHhH45hQnEEKhx6QYNxNJ4gLRE5WpzX-r1tRHsj0lukjsYihtgZIbyR3skwWldzeocmpIVg-RFRt3Zyq8_Eahifp4vJ1Fqv0_QHSLlv0%2522%257D%255D%252C%2522gctx%2522%253A%2522eJyNV0tzJDUM_i3MdbeCJcuv3AK1B4qwULAUBRQ11ZPphKlMusM8kl0o_juyPnXCgQOX-cZu25KlTw__tRq262k8Pc-H-9XlqoYYJcbV29Ww2-o40m1IraYmgSXLsCn5ditboU2I-ba0vvAwDrpyn6U1KZ8d9_PpYjNM03g4zY_9-3m7G6ebcX0c7x7G6XRcXf66itxscwyUSJFSNSCTLRKSArMe2FFqq4q55mZQikHtk9yo9a0Sm6-NwdFOjDXmPg6h9XliMcE6rl1UVa3tFJH-tRXukCnZqDo0g4ZRw7lYEmPfwJGCCzNo_bDKnE1PKFAo2dIQq41rsttQDA0G6LeRRBkGwIWLHUvNgbHSrKKiKWIMEzac16BDzWaHjgTkBZtjcjR1pMXi2By7CiTZjpHUAJhMfW1MUCDGhEm3iFmS3SImnRvnjpGIzGnszlOEEWAbUZ75NK4okOqWEteoKxw5pb5WSnSb474pYKui3YtK7keLmyPaSG0FvkllgFEoBbsW52w3ga6SuUJFECVmcYRcWIScDmYYkgKLFJjCOKLfIo4zqCZDR4LL4KaqGGHav2aAX8koHovRQcPRgfwjTnBhEE1wvjSfxA7zMHEJ0BnWJZOlIxjZgysWmN5srrO4XvWR7xecChua31PLuKw5px_DjriecU3BhHicdRRH6JkcPJAFQIgmuEGRjVgp-YWhUzGO5ALVBBQQ6CTLTrcfbIxUo7PQUOB7c4vyEXukBXKMjsgJ2e6lScUhOCUBRv0g5v-OUNGZb4aOYgIUljXZ0eRH8IlBWrbLaXZEJIcGA7GxQ2FJN3BribBp8SFjEWMUfG10dDluC9OCKCMnRRiqwabIhoSlAUFIIAaZPyNZxolxUQR5l8AsvYU447EFs-Jp0GZLs3vnkl0IiO_RCvoJyCigZsQNBElexExfqxGJA9t9JBCOsRvoiDHyDO5JpnpAI9nGEBABOnYdKqDLqe3l47LJ3AjzqnREH_K0auOLTKtSLF8XYc985pmOIE9lZ6DpV4RsSNmiPTHyjdad6ui7ogeLBWXkiEgTNhU4RcsvRbNjt29AadB6hZIQUEECShvDItXs1FLCFpvkUo05JDEstanPN8ZiJhOnvu-bWjQGKTGRDUJNCwbH5CiO4G6xaqgUBpN0O1Ke5yGt7OAHrNBxGWdHPw_ZSNHk5uDihBzhAg9yHTdHP1aQ9oJrizQqVr-5wAOa_sgRoSXi2KEhopqHizC85OkiwJfBliDoFJBxcUpdeg8o4s4mL81IjOLthsAIitURy5zf6CE4QAOjAyfQg5CMdBbFUaCsIHNAWTHbxBj82sZWbcnIwDisAuG2vOR-OE9AFG8rnK8IKjtbux40PxUFF3WpIT6bJTn1jDd7UDx4_mVGV2H1UpMJUo7A35lBG01IfVMF9AaoOHrJsyjwkImoWD3-KyLJzKBx5zWQlsYF_Wv1eLMzsiuiXY0hF7Nob9y8JHgHY-ZKBPWapwf4qwbvEtFReKvlPZYFakxWa5ltUk3jqQCNTkG3FMz6hZCJ4DQGjaKTEcGooYq8bJZVYmBtTYUcwQ3LzFpgkR3RF0bv_bS19U0Zyat4jrdMV9CgE3yoli1L8vRcCpeiPhYvz1zcsCBjkJfu3gwdvV6iHkfPCJG9KVJ6mIzCS6Lxy4DoSrglcZjsjARQ3AMZrazYGYw-xxvXl0aVPFTgOwarTZoqA6J5zSg4TftSr__wl_ZCIG1qXvPS6re3q81hfj6Oh_V-mO7Ow92oL60f33_9_tuf3q9eP07DQ_8wfNzNx39NP42H426e9AtdlIt--s10Wl2S4jwd9Sm2fjwfHufjqE-y_Dr5NE7b-aBzapY-e55Oh09rew6W5iZ7mT3OOv3dtU5tx6edvvIehul8O9yczofxoJ_O0_00P0-v30-fHruu2_F4j_fh-NSFnnYP4_E0PDyqfloLY9Dqo4rejfPaZXU5s5phq3t2x_XDvNnt9aTbYX8cbWZ6HF6G9-MnfdFu7a35xbsPV7pnv7v7_aTbtqMOZn3yrh_nmz9Pg47wZ62fNodh6t-vr375ef3l1fV198F-vhn263M3qVlBGwmhoNlEGyTS7rTXbirGh_m4OGO_m84f-9nqtPXTbnx-2ZtC1DSRtP3WXpM15TJ6jMP4x1lt8F_r-iOuJP3Tqafv6PWw0ef0qd9uk8IbDjdvTsNda_Yb3lx9_-HdN1_98CaFTdffH966aXWZ6HWsd93OD-pnndqdjEHbzWgWscuq5p0v4NXnC4dgh8euI8ULzU8XWscuemj8j1v-_Q8ySmFW%2522%257D',
        viewability:
          'https://api.poczta.onet.pl/webmail/csr/8033433/v1/events-processor/av?eventData=%7B%22gctx%22%3A%22eJyNV0tzJDUM_i3MdbeCJcuv3AK1B4qwULAUBRQ11ZPphKlMusM8kl0o_juyPnXCgQOX-cZu25KlTw__tRq262k8Pc-H-9XlqoYYJcbV29Ww2-o40m1IraYmgSXLsCn5ditboU2I-ba0vvAwDrpyn6U1KZ8d9_PpYjNM03g4zY_9-3m7G6ebcX0c7x7G6XRcXf66itxscwyUSJFSNSCTLRKSArMe2FFqq4q55mZQikHtk9yo9a0Sm6-NwdFOjDXmPg6h9XliMcE6rl1UVa3tFJH-tRXukCnZqDo0g4ZRw7lYEmPfwJGCCzNo_bDKnE1PKFAo2dIQq41rsttQDA0G6LeRRBkGwIWLHUvNgbHSrKKiKWIMEzac16BDzWaHjgTkBZtjcjR1pMXi2By7CiTZjpHUAJhMfW1MUCDGhEm3iFmS3SImnRvnjpGIzGnszlOEEWAbUZ75NK4okOqWEteoKxw5pb5WSnSb474pYKui3YtK7keLmyPaSG0FvkllgFEoBbsW52w3ga6SuUJFECVmcYRcWIScDmYYkgKLFJjCOKLfIo4zqCZDR4LL4KaqGGHav2aAX8koHovRQcPRgfwjTnBhEE1wvjSfxA7zMHEJ0BnWJZOlIxjZgysWmN5srrO4XvWR7xecChua31PLuKw5px_DjriecU3BhHicdRRH6JkcPJAFQIgmuEGRjVgp-YWhUzGO5ALVBBQQ6CTLTrcfbIxUo7PQUOB7c4vyEXukBXKMjsgJ2e6lScUhOCUBRv0g5v-OUNGZb4aOYgIUljXZ0eRH8IlBWrbLaXZEJIcGA7GxQ2FJN3BribBp8SFjEWMUfG10dDluC9OCKCMnRRiqwabIhoSlAUFIIAaZPyNZxolxUQR5l8AsvYU447EFs-Jp0GZLs3vnkl0IiO_RCvoJyCigZsQNBElexExfqxGJA9t9JBCOsRvoiDHyDO5JpnpAI9nGEBABOnYdKqDLqe3l47LJ3AjzqnREH_K0auOLTKtSLF8XYc985pmOIE9lZ6DpV4RsSNmiPTHyjdad6ui7ogeLBWXkiEgTNhU4RcsvRbNjt29AadB6hZIQUEECShvDItXs1FLCFpvkUo05JDEstanPN8ZiJhOnvu-bWjQGKTGRDUJNCwbH5CiO4G6xaqgUBpN0O1Ke5yGt7OAHrNBxGWdHPw_ZSNHk5uDihBzhAg9yHTdHP1aQ9oJrizQqVr-5wAOa_sgRoSXi2KEhopqHizC85OkiwJfBliDoFJBxcUpdeg8o4s4mL81IjOLthsAIitURy5zf6CE4QAOjAyfQg5CMdBbFUaCsIHNAWTHbxBj82sZWbcnIwDisAuG2vOR-OE9AFG8rnK8IKjtbux40PxUFF3WpIT6bJTn1jDd7UDx4_mVGV2H1UpMJUo7A35lBG01IfVMF9AaoOHrJsyjwkImoWD3-KyLJzKBx5zWQlsYF_Wv1eLMzsiuiXY0hF7Nob9y8JHgHY-ZKBPWapwf4qwbvEtFReKvlPZYFakxWa5ltUk3jqQCNTkG3FMz6hZCJ4DQGjaKTEcGooYq8bJZVYmBtTYUcwQ3LzFpgkR3RF0bv_bS19U0Zyat4jrdMV9CgE3yoli1L8vRcCpeiPhYvz1zcsCBjkJfu3gwdvV6iHkfPCJG9KVJ6mIzCS6Lxy4DoSrglcZjsjARQ3AMZrazYGYw-xxvXl0aVPFTgOwarTZoqA6J5zSg4TftSr__wl_ZCIG1qXvPS6re3q81hfj6Oh_V-mO7Ow92oL60f33_9_tuf3q9eP07DQ_8wfNzNx39NP42H426e9AtdlIt--s10Wl2S4jwd9Sm2fjwfHufjqE-y_Dr5NE7b-aBzapY-e55Oh09rew6W5iZ7mT3OOv3dtU5tx6edvvIehul8O9yczofxoJ_O0_00P0-v30-fHruu2_F4j_fh-NSFnnYP4_E0PDyqfloLY9Dqo4rejfPaZXU5s5phq3t2x_XDvNnt9aTbYX8cbWZ6HF6G9-MnfdFu7a35xbsPV7pnv7v7_aTbtqMOZn3yrh_nmz9Pg47wZ62fNodh6t-vr375ef3l1fV198F-vhn263M3qVlBGwmhoNlEGyTS7rTXbirGh_m4OGO_m84f-9nqtPXTbnx-2ZtC1DSRtP3WXpM15TJ6jMP4x1lt8F_r-iOuJP3Tqafv6PWw0ef0qd9uk8IbDjdvTsNda_Yb3lx9_-HdN1_98CaFTdffH966aXWZ6HWsd93OD-pnndqdjEHbzWgWscuq5p0v4NXnC4dgh8euI8ULzU8XWscuemj8j1v-_Q8ySmFW%22%2C%22ems%22%3A%5B%7B%22lctx%22%3A%22eJxlj8EOgjAMht9l56GgBAJHn8CD92VjjWkyNrIVEjW-u8VFQuLx_9p-bV_CoFVRE4i-PJRSDBE04QIKrehFU3dd3YodTi4QF4z2HiKFiWsWtMvtRcUREuHIQtbCAn7-mTEpcHhH45hQnEEKhx6QYNxNJ4gLRE5WpzX-r1tRHsj0lukjsYihtgZIbyR3skwWldzeocmpIVg-RFRt3Zyq8_Eahifp4vJ1Fqv0_QHSLlv0%22%7D%5D%7D',
      },
      adserver_meta: {
        async_render: false,
        async_viewability: false,
        enable_conversion_tracking: true,
        mailing_meta: null,
        server: 'das',
        set_slot_size: true,
        viewability: 1,
        viewability_cfg: {
          percent: 50,
          time: 1000,
        },
      },
    },
  },
];
