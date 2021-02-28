describe("Party Horn Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
  });

  it("First Test", () => {
    expect(true).to.equal(true);
  });

  it("Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(function ($el) {
      expect($el).to.have.value(75);
    });
  });
  it("volume input changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(function ($el) {
      expect($el).to.have.value(33);
    });
  });
  it("volume changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#horn-sound").then(function ($el) {
      expect($el).to.have.prop("volume", 0.33);
    });
  });
  it("image and sound sources change when you select the party horn radio button", () => {
    cy.get("#radio-party-horn").trigger("change");
    cy.get("#horn-sound").then(function (e) {
      expect(e).attr("src", "./assets/media/audio/party-horn.mp3");
    });
    cy.get("#sound-image").then(function (e) {
      expect(e).attr("src", "./assets/media/images/party-horn.svg");
    });
  });
  it("volume image changes when increasing volumes, level 3", () => {
    cy.get("#volume-slider").invoke("val", 70).trigger("input");
    cy.get("#volume-image").then(function (e) {
      expect(e).attr("src", "./assets/media/icons/volume-level-3.svg");
    });
  });
  it("volume image changes when increasing volumes, level 2", () => {
    cy.get("#volume-slider").invoke("val", 40).trigger("input");
    cy.get("#volume-image").then(function (e) {
      expect(e).attr("src", "./assets/media/icons/volume-level-2.svg");
    });
  });
  it("volume image changes when increasing volumes level 1", () => {
    cy.get("#volume-slider").invoke("val", 20).trigger("input");
    cy.get("#volume-image").then(function (e) {
      expect(e).attr("src", "./assets/media/icons/volume-level-1.svg");
    });
  });
  it("Test if the honk button is disabled when the textbox input is a empty", () => {
    cy.get("#volume-number").clear();
    cy.get("#honk-btn").then(function (e) {
      expect(e).attr("disabled", "disabled");
    });
  });
  it("Test if the honk button is disabled when the textbox input is a non-number", () => {
    cy.get("#volume-number").clear().type("a");
    cy.get("#honk-btn").then(function (e) {
      expect(e).attr("disabled", "disabled");
    });
  });
  it("hi", () => {
    cy.get("#volume-number").clear().type("1000").trigger("input");
    // cy.get("#volume-number:invalid").then(function (e) {
    //   expect(e).to.be.true;
    // });
    cy.get("#volume-number").should("have.css", ":invalid");
  });
});
