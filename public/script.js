/* Digi_TransX Dispatch Almanac Interactions */
(() => {
  'use strict';

  const STAGE_DATA = {
    order: {
      title: '01 \u2014 Order Definition',
      owner: 'Lead: Service Seeker',
      summary:
        'Instead of repeating cargo dimensions across scattered chat threads, everyday users and business seekers build one structured requirement specifying locations, cargo class, weight, and truck capability needs.',
      action:
        'Creates an audited open request ready for compatibility screening\u2014without auto-assigning a carrier prematurely.',
      guard:
        'Seekers keep clarity over expectations; fleets avoid blind deadhead inquiries on mismatched loads.',
      next:
        'Passes automatically into rule-based vehicle compatibility filtering across verified fleets.'
    },
    match: {
      title: '02 \u2014 Compatibility Filter',
      owner: 'Lead: Rule Screening',
      summary:
        'Digi_TransX matches order parameters against registered truck dimensions, suitability flags, and service coverage areas before surfacing the request.',
      action:
        'Shows open opportunities selectively to fleet accounts whose idle or available trucks fit the physical haul.',
      guard:
        'Stops incompatible rigs from wasting seeker time while avoiding black-box algorithmic rate overrides.',
      next:
        'Matched transporters review shipment details and decide whether to prepare a vehicle-backed offer.'
    },
    bid: {
      title: '03 \u2014 Open Fleet Bidding',
      owner: 'Lead: Fleet Transporter',
      summary:
        'Eligible transporters submit competitive bids paired with a specific vehicle in their fleet, giving shippers concrete truck specs and track history beside price.',
      action:
        'Seekers inspect multiple truck-specific offers openly rather than accepting the first middleman quote over phone.',
      guard:
        'Drivers cannot step around fleet accounts to bid independently, keeping commercial responsibility intact.',
      next:
        'Once a seeker selects a preferred fleet offer, the trip advances to payment hold readiness.'
    },
    escrow: {
      title: '04 \u2014 Escrow Hold Concept',
      owner: 'Lead: Test Checkout Hold',
      summary:
        'Acceptance transitions funds into an escrow hold concept before freight movement starts, assuring transporters verified booking backing while guarding shipper money.',
      action:
        'In current private testing this runs strictly through dummy test-card checkout simulation with refundable hold paths.',
      guard:
        'No live bank accounts or production payment rails are active yet\u2014test separation is explicit and auditable.',
      next:
        'Confirmed readiness opens fleet crew dispatch or verified self-drive assignment.'
    },
    dispatch: {
      title: '05 \u2014 Driver or Owner-Op Run',
      owner: 'Lead: Dispatched Driver / Owner-Op',
      summary:
        'Transporters assign trips to contracted drivers (permanent hire or per-trip dispatch) or verify driving credentials to activate "Drive Myself" on their own truck.',
      action:
        'Active runs lock drivers to a single shipment at a time, supporting contextual trip chat, fuel logs, incident records, and active-run smartphone check-ins.',
      guard:
        'Conflict prevention blocks overlapping active acceptances; dedicated external vehicle tracker hardware stays offline in current builds.',
      next:
        'Upon physical arrival at dropoff, responsibility hands over to client cargo inspection.'
    },
    otp: {
      title: '06 \u2014 Inspect-First OTP & Review',
      owner: 'Lead: Seeker & Delivery Gate',
      summary:
        'Truck arrival triggers physical inspection first\u2014not instant automatic settlement. Satisfied seekers share a one-time completion code; unresolved issues trigger dispute freeze.',
      action:
        'Verified OTP completion triggers staged internal settlement state transitions and unlocks genuine mutual review feedback.',
      guard:
        'Disputes lock remaining payout for admin arbitration using trip logs and contextual chat records, without revealing internal reserve rules.',
      next:
        'Shipment closes cleanly into completed history across seeker, fleet, and assigned driver accounts.'
    }
  };

  /* 1. Year Stamp */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  /* 2. Mobile Almanac Navigation Toggle */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('primary-navigation');
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
      const next = menuToggle.getAttribute('aria-expanded') !== 'true';
      navLinks.classList.toggle('is-open', next);
      menuToggle.setAttribute('aria-expanded', String(next));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* 3. Interactive Hero Specimen Packet Rack (Individual + Flip-All) */
  const packetButtons = Array.from(document.querySelectorAll('.packet-btn'));
  const flipAllBtn = document.getElementById('flip-all-btn');

  const syncFlipAllLabel = () => {
    if (!flipAllBtn || packetButtons.length === 0) return;
    const allFlipped = packetButtons.every((btn) => btn.getAttribute('aria-pressed') === 'true');
    flipAllBtn.setAttribute('aria-pressed', String(allFlipped));
    flipAllBtn.textContent = allFlipped ? 'Show Front Artwork' : 'Flip All Rules';
  };

  packetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isPressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!isPressed));
      syncFlipAllLabel();
    });
  });

  if (flipAllBtn) {
    flipAllBtn.addEventListener('click', () => {
      const targetState = flipAllBtn.getAttribute('aria-pressed') !== 'true';
      packetButtons.forEach((btn) => btn.setAttribute('aria-pressed', String(targetState)));
      syncFlipAllLabel();
    });
  }

  /* 4. Interactive Six-Stage One-Time Workflow Inspector */
  const stepCards = Array.from(document.querySelectorAll('.step-card[data-stage]'));
  const titleEl = document.getElementById('stage-title');
  const ownerEl = document.getElementById('stage-owner');
  const summaryEl = document.getElementById('stage-summary');
  const actionEl = document.getElementById('stage-action');
  const guardEl = document.getElementById('stage-guard');
  const nextEl = document.getElementById('stage-next');

  const tabLedger = document.getElementById('tab-ledger');
  const tabDiagram = document.getElementById('tab-diagram');
  const panelLedger = document.getElementById('panel-ledger');
  const panelDiagram = document.getElementById('panel-diagram');

  const activateTab = (tabId) => {
    if (!tabLedger || !tabDiagram || !panelLedger || !panelDiagram) return;
    const isLedger = tabId === 'tab-ledger';
    tabLedger.setAttribute('aria-selected', String(isLedger));
    tabDiagram.setAttribute('aria-selected', String(!isLedger));
    panelLedger.hidden = !isLedger;
    panelDiagram.hidden = isLedger;
  };

  if (tabLedger && tabDiagram) {
    tabLedger.addEventListener('click', () => activateTab('tab-ledger'));
    tabDiagram.addEventListener('click', () => activateTab('tab-diagram'));
  }

  stepCards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.dataset.stage;
      const stage = key ? STAGE_DATA[key] : null;
      if (!stage) return;

      stepCards.forEach((item) => {
        const active = item === card;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });

      if (titleEl) titleEl.textContent = stage.title;
      if (ownerEl) ownerEl.textContent = stage.owner;
      if (summaryEl) summaryEl.textContent = stage.summary;
      if (actionEl) actionEl.textContent = stage.action;
      if (guardEl) guardEl.textContent = stage.guard;
      if (nextEl) nextEl.textContent = stage.next;

      activateTab('tab-ledger');
    });
  });

  /* 5. Role & Driver Boundary Filter Pills */
  const filterPills = Array.from(document.querySelectorAll('.filter-pill[data-role-filter]'));
  const roleCards = Array.from(document.querySelectorAll('.role-card[data-role]'));

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const selected = pill.dataset.roleFilter || 'all';
      filterPills.forEach((p) => p.setAttribute('aria-pressed', String(p === pill)));

      roleCards.forEach((card) => {
        const match = selected === 'all' || card.dataset.role === selected;
        card.classList.toggle('is-dimmed', !match);
      });
    });
  });

})();
