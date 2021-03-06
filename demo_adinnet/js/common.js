//导航
! function (a) {
    a.fn.jPinning = function (b) {
        var c = {
                offset: !1,
                onPin: function () {},
                onUnpin: function () {}
            },
            d = a.extend({}, c, b),
            e = {
                lastScrollTop: 0,
                window: a(window),
                status: "pinned"
            },
            f = {
                nav: "pinning-nav",
                pinned: "pinned",
                unpinned: "unpinned",
                top: "pinning-top"
            },
            g = {
                isUnpinned: function () {
                    return "unpinned" == e.status ? !0 : !1
                },
                isPinned: function () {
                    return "pinned" == e.status ? !0 : !1
                },
                prepare: function () {
                    e.target.addClass(f.nav), e.target.css("position", "fixed")
                },
                pin: function () {
                    g.isUnpinned() && (e.status = "pinned", e.target.removeClass(f.unpinned).addClass(f.pinned), d.onPin.call(e.target))
                },
                unpin: function () {
                    g.isPinned() && (e.status = "unpinned", e.target.removeClass(f.pinned).removeClass(f.top).addClass(f.unpinned), d.onUnpin.call(e.target))
                },
                calcOffset: function (a) {
                    return "auto" == d.offset && (d.offset = e.target.outerHeight()), d.offset ? a > d.offset ? !0 : !1 : !0
                },
                pinHandler: function () {
                    {
                        var a = e.window.scrollTop();
                        e.window.height()
                    }
                    if (0 == a && e.target.addClass(f.top), a <= e.lastScrollTop) g.pin();
                    else {
                        var b = g.calcOffset(a);
                        b && g.unpin()
                    }
                    e.lastScrollTop = a
                }
            };
        return this.each(function () {
            e.target = a(this), g.prepare(), a(window).on("scroll", g.pinHandler)
        })
    }
}(jQuery);