it("should export imported global", function() {
	return import("./module.wat").then(function({ v, w }) {
		expect(v).toBe(1);
		expect(w).toBe(1);
	});
});
