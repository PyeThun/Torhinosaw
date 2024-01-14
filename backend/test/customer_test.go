package test

import (
	// "fmt"
	"testing"

	"github.com/asaskevich/govalidator"
	. "github.com/onsi/gomega"
	"github.com/PyeThun/team05/entity"
)

func TestEmail(t *testing.T) {

	g := NewGomegaWithT(t)

	t.Run(`Email is invalid`, func(t *testing.T) {
		customer := entity.Customer{
			Email: "pak.com",
			Firstname: "p",
			Lastname: "p",
			Username: "p",
		}

		ok, err := govalidator.ValidateStruct(customer)

		g.Expect(ok).NotTo(BeNil())
		g.Expect(err).NotTo(BeNil())

		g.Expect(err.Error()).To(Equal("Email is invalid"))
	})
}
func TestBestCase(t *testing.T) {

	g := NewGomegaWithT(t)

	t.Run(`so good baby`, func(t *testing.T) {
		customer := entity.Customer{
			Email: "pak@hotmail.com",
			Firstname: "p",
			Lastname: "p",
			Username: "p",
		}

		ok, err := govalidator.ValidateStruct(customer)

		g.Expect(ok).To(BeTrue())
		g.Expect(err).To(BeNil())

		
	})
}