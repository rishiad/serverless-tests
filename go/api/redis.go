package handler

import (
	"context"
	"net/http"

	"github.com/go-redis/redis/v8"
)

var ctx = context.Background()



func Redis(w http.ResponseWriter, r *http.Request) {
	opt, _ := redis.ParseURL("redis://default:9a23ee840f48427cb5b2fa2c1214f208@apn1-famous-terrier-33210.upstash.io:33210")
	client := redis.NewClient(opt)
	w.WriteHeader(http.StatusCreated)
	w.Header().Set("Content-Type", "application/json")

	// set a foo key on upstash with this value
	client.Set(ctx, "foo", "Go", 0)

	// get the foo key from upstash
	foo := client.Get(ctx, "foo")
	w.Write([]byte(foo.Val()))
}
